<script lang="ts">
  import { onMount } from "svelte";
  import type { FilmStock } from "$lib/data/filmStocks";
  import { referenceBaseline } from "$lib/data/filmStocks";
  import { t } from "$lib/i18n";

  interface Props {
    selectedFilms: FilmStock[];
    showReference: boolean;
  }

  let { selectedFilms, showReference }: Props = $props();

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null = null;

  const colors = [
    { fill: "rgba(239, 68, 68, 0.15)", stroke: "#ef4444", name: "Film 1" },
    { fill: "rgba(245, 158, 11, 0.15)", stroke: "#f59e0b", name: "Film 2" },
    { fill: "rgba(139, 92, 246, 0.15)", stroke: "#8b5cf6", name: "Film 3" },
  ];

  const referenceColor = {
    fill: "rgba(107, 114, 128, 0.08)",
    stroke: "#6b7280",
  };

  // Color labels - will be updated when $t changes
  let colorLabels: string[] = [];
  $effect(() => {
    colorLabels = [$t.red, $t.yellow, $t.green, $t.cyan, $t.blue, $t.magenta];
    drawChart();
  });
  const colorKeys = [
    "red",
    "yellow",
    "green",
    "cyan",
    "blue",
    "magenta",
  ] as const;

  function getFilmData(film: FilmStock | null) {
    if (!film) return colorKeys.map(() => 1);
    return colorKeys.map((key) => film.vectorscope_analysis[key].saturation);
  }

  function getComputedColor(varName: string): string {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(varName)
      .trim();
  }

  function drawChart() {
    if (!ctx || !canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const maxRadius = Math.min(width, height) / 2 - 60;
    const levels = 5;
    const angleStep = (Math.PI * 2) / 6;

    // Get theme-aware colors
    const gridColor =
      getComputedColor("--chart-grid") || "rgba(255, 255, 255, 0.06)";
    const axisColor =
      getComputedColor("--chart-axis") || "rgba(255, 255, 255, 0.08)";

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw grid circles
    for (let i = 1; i <= levels; i++) {
      const radius = (maxRadius / levels) * i;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw axis lines and labels
    for (let i = 0; i < 6; i++) {
      const angle = angleStep * i - Math.PI / 2;
      const x = centerX + Math.cos(angle) * maxRadius;
      const y = centerY + Math.sin(angle) * maxRadius;

      // Axis lines
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = axisColor;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Labels
      const labelRadius = maxRadius + 28;
      const labelX = centerX + Math.cos(angle) * labelRadius;
      const labelY = centerY + Math.sin(angle) * labelRadius;

      ctx.fillStyle = getColorForLabel(i);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(colorLabels[i] || "", labelX, labelY);
    }

    // Draw reference polygon if enabled
    if (showReference) {
      drawPolygon(
        colorKeys.map(() => 1),
        referenceColor.fill,
        referenceColor.stroke,
        1.5,
        true,
      );
    }

    // Draw film polygons
    selectedFilms.forEach((film, index) => {
      const data = getFilmData(film);
      const color = colors[index];
      drawPolygon(data, color.fill, color.stroke, 2.5, false);
    });

    // Draw data points for films
    selectedFilms.forEach((film, index) => {
      const data = getFilmData(film);
      const color = colors[index];
      drawDataPoints(data, color.stroke);
    });

    function drawPolygon(
      data: number[],
      fillColor: string,
      strokeColor: string,
      lineWidth: number,
      dashed: boolean,
    ) {
      ctx!.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = angleStep * i - Math.PI / 2;
        const value = Math.min(data[i], 2); // Cap at 2x for display
        const radius = (value / 2) * maxRadius;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        if (i === 0) {
          ctx!.moveTo(x, y);
        } else {
          ctx!.lineTo(x, y);
        }
      }
      ctx!.closePath();

      // Fill
      ctx!.fillStyle = fillColor;
      ctx!.fill();

      // Stroke
      ctx!.strokeStyle = strokeColor;
      ctx!.lineWidth = lineWidth;
      if (dashed) {
        ctx!.setLineDash([5, 5]);
      } else {
        ctx!.setLineDash([]);
      }
      ctx!.stroke();
      ctx!.setLineDash([]);
    }

    function drawDataPoints(data: number[], color: string) {
      for (let i = 0; i < 6; i++) {
        const angle = angleStep * i - Math.PI / 2;
        const value = Math.min(data[i], 2);
        const radius = (value / 2) * maxRadius;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        // Outer glow
        ctx!.beginPath();
        ctx!.arc(x, y, 8, 0, Math.PI * 2);
        ctx!.fillStyle = color.replace(")", ", 0.2)").replace("rgb", "rgba");
        ctx!.fill();

        // Inner point
        ctx!.beginPath();
        ctx!.arc(x, y, 5, 0, Math.PI * 2);
        ctx!.fillStyle = color;
        ctx!.fill();

        // White center
        ctx!.beginPath();
        ctx!.arc(x, y, 2, 0, Math.PI * 2);
        ctx!.fillStyle = "#fff";
        ctx!.fill();
      }
    }
  }

  function getColorForLabel(index: number): string {
    const colorList = [
      "#ef4444",
      "#eab308",
      "#22c55e",
      "#06b6d4",
      "#3b82f6",
      "#d946ef",
    ];
    return colorList[index] || "#a0a0ab";
  }

  onMount(() => {
    ctx = canvas.getContext("2d");
    drawChart();

    const resizeObserver = new ResizeObserver(() => {
      drawChart();
    });
    resizeObserver.observe(canvas);

    // Watch for theme changes
    const themeObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          drawChart();
        }
      });
    });
    themeObserver.observe(document.documentElement, { attributes: true });

    return () => {
      resizeObserver.disconnect();
      themeObserver.disconnect();
    };
  });

  $effect(() => {
    // Re-draw when films or reference changes
    selectedFilms;
    showReference;
    drawChart();
  });
</script>

<div class="chart-container">
  <!-- svelte-ignore a11y_no_interactive_element_to_noninteractive_role -->
  <canvas
    bind:this={canvas}
    role="img"
    aria-label={$t.a11yRadarChartDescription}
  >
    <p>{$t.a11yRadarChartDescription}</p>
    <ul>
      {#each selectedFilms as film}
        <li>{film.name}: {film.description}</li>
      {/each}
    </ul>
  </canvas>

  <div class="legend">
    {#if showReference}
      <div class="legend-item">
        <span class="legend-color reference"></span>
        <span class="legend-text">{$t.reference}</span>
      </div>
    {/if}
    {#each selectedFilms as film, i}
      <div class="legend-item">
        <span class="legend-color" style="background: {colors[i].stroke}"
        ></span>
        <span class="legend-text">{film.name}</span>
      </div>
    {/each}
  </div>

  <div class="chart-info">
    <span class="info-label">R</span>={$t.red},
    <span class="info-label">Y</span>={$t.yellow},
    <span class="info-label">G</span>={$t.green},
    <span class="info-label">C</span>={$t.cyan},
    <span class="info-label">B</span>={$t.blue},
    <span class="info-label">M</span>={$t.magenta}
  </div>
</div>

<style>
  .chart-container {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  canvas {
    width: 100%;
    height: 100%;
    flex: 1;
  }

  .legend {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    background: var(--bg-elevated);
    border-radius: 9999px;
    transition: background-color 0.25s ease;
  }

  .legend-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .legend-color {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .legend-color.reference {
    background: #6b7280;
    border: 2px dashed #6b7280;
    background: transparent;
  }

  .legend-text {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text-secondary);
  }

  .chart-info {
    margin-top: 0.75rem;
    font-size: 0.7rem;
    color: var(--text-muted);
    font-family: "JetBrains Mono", monospace;
  }

  .info-label {
    color: var(--text-secondary);
    font-weight: 600;
  }
</style>

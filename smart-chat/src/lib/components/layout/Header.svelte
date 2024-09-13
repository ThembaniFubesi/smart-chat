<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let logoUrl: string;
  export let title: string;
  export let subTitle: string;

  const dispatch = createEventDispatcher();
</script>

<div class="navbar bg-base-100 rounded-t-2xl border border-base-300">
  <div class="flex-1">
    <div class="flex items-center">
      <div class="flex-auto">
        <img src={logoUrl} class="h-10 w-auto" alt={title} />
      </div>
      <div class="flex-auto ps-2">
        <h4 class="text-lg">{title}</h4>
        <h6 class="text-xs">{subTitle}</h6>
      </div>
    </div>
  </div>
  <div class="flex-none">
    <button class="btn btn-square btn-ghost" on:click={() => dispatch("close")}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-x-lg"
        viewBox="0 0 16 16"
      >
        <path
          d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
        />
      </svg>
    </button>
  </div>
</div>

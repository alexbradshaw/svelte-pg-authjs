<script>
  let count = 0

  function increment() {
    count += 1
  }
</script>

<main>
  <h1>Hello, world!</h1>
  <p>The count is {count}</p>
  <button on:click={increment}>Increment</button>

  <h1>Welcome to SvelteKit</h1>
  <p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
  </p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
  }
</style>

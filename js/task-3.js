document.querySelector("#name-input").addEventListener("input", function () {
  const input = this.value.trim();
  const output = document.querySelector("#name-output");
  output.textContent = input ? input : "Anonymous";
});

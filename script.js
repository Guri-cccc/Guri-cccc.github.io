<script>
function scrollPress(direction) {
  const container = document.getElementById("pressContainer");
  const scrollAmount = 350; // 한 번에 넘길 거리(px)
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}
</script>
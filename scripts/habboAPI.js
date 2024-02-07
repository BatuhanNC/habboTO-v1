function getFurnis() {
  let url = "https://apihabbo.com/api/furnis?per_page=20";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.data.forEach((furni) => {
        let item =
          `<div class="item">
                <img
                  src="https://content.puhekupla.com/img/furni/` +
          furni.revision +
          `/` +
          furni.code +
          `.png"
                  alt=""
                  class="furni"
                />
                <img
                  src="https://images.habbo.com/dcr/hof_furni/` +
          furni.revision +
          `/` +
          furni.code +
          `_icon.png"
                  alt=""
                  class="icon"
                />
                <div class="name">${furni.name}</div>
              </div>`;
        document.querySelector(".lastFurnis").innerHTML += item;
      });
    });
}
getFurnis();
// ╔═════════════════════════════════════════════════════════BADGES API═════════════════════════════════════════════════════════════════╗
// ╚═════════════════════════════════════════════════════════BADGES API═════════════════════════════════════════════════════════════════╝
function getBadges() {
  let url = "https://apihabbo.com/api/badges?per_page=14";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.data.forEach((badge) => {
        let item =
          ` 
        <div class="item">
          <img src="https://images.habbo.com/c_images/album1584/` +
          badge.code +
          `.gif" >
          <div class="code">${badge.code}</div>
        </div>`;
        document.querySelector(".lastBadges").innerHTML += item;
      });
    });
}
getBadges();

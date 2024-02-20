const dialog = document.getElementById("myDialog");
const dialogOpener = document.querySelector(".header__openDialogBtn");
const dialogCloser = document.querySelector(".header__closeDialogBtn");

function closeOnBackDropClick({ currentTarget, target }) {
  const dialog = currentTarget;
  const isClickedOnBackDrop = target === dialog;
  if (isClickedOnBackDrop) {
    dialog.close();
  }
}

function openModalAndLockScroll() {
  dialog.showModal();
}

function close() {
    dialog.close();
  }

dialog.addEventListener("click", closeOnBackDropClick);
dialogOpener.addEventListener("click", openModalAndLockScroll);
dialogCloser.addEventListener('click', (event) => {
    event.stopPropagation()
    close()
  })


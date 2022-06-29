window.onload = () => {
    const modal = document.getElementById("contentFormModal");
    modal.addEventListener('show.bs.modal', (event) => {
        const button = event.relatedTarget;
        const content = button.getAttribute('data-bs-whatever');

        const modalTitle = contentFormModal.querySelector('.modal-title')
        const modalBodyInput = contentFormModal.querySelector('.modal-body input');

        if (content === "") {
            modalTitle.textContent = "New " + modalTitle.textContent;
        } else {
            modalTitle.textContent = "Update " + modalTitle.textContent;
        }
        modalBodyInput.value = content;
    });
}
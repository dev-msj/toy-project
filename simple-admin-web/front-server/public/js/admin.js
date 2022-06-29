const formModal = document.getElementById('contentFormModal');
formModal?.addEventListener('show.bs.modal', event => {
  const button = event.relatedTarget;
  const content = button.getAttribute('data-bs-whatever');
  const modalBodyInput = formModal.querySelector('.modal-body input');

  modalBodyInput.value = content;
});
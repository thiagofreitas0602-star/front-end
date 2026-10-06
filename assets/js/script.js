

// Mensagem no botão "clique aqui" na página de formulários

function mostrarMensagem() {
    alert("Você clicou no botão direitinho!");
}


// Sidebar - Determina o caminho base para os links da barra lateral com base na localização atual da página
const basePath = window.location.pathname.includes('/pages/') ? '../' : '';

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');

    if (!sidebar) return;

    sidebar.innerHTML = `
        <h1><span>TQDC Coporation ©</span></h1>

        <a href="${basePath}index.html">
            <iconify-icon icon="mdi:home"></iconify-icon>
            <span>Início</span>
        </a>

        <a href="${basePath}pages/page1-html.html">
            <iconify-icon icon="mdi:language-html5"></iconify-icon>
            <span>HTML</span>
        </a>

        <a href="${basePath}pages/page2-css.html">
            <iconify-icon icon="mdi:language-css3"></iconify-icon>
            <span>CSS</span>
        </a>

        <a href="${basePath}pages/page3-js.html">
            <iconify-icon icon="mdi:language-javascript"></iconify-icon>
            <span>JavaScript</span>
        </a>

        <a href="${basePath}pages/page4-tabelas.html">
            <iconify-icon icon="mdi:table"></iconify-icon>
            <span>Tabelas</span>
        </a>

        <a href="${basePath}pages/page5-formularios.html">
            <iconify-icon icon="mdi:form"></iconify-icon>
            <span>Formulários</span>
        </a>

        <a href="${basePath}pages/page6-novapagina.html">
            <iconify-icon icon="mdi:target"></iconify-icon>
            <span>Nova Página</span>
        </a>
    `;
});



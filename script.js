// Lógica do Menu Responsivo (Mobile)
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fecha o menu ao clicar em qualquer link (Mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Lógica do Simulador de Impacto Ambiental
function calcularImpacto() {
    const selecao = document.getElementById('praticaSelect').value;
    const resultadoDiv = document.getElementById('resultado');

    let mensagem = "";

    switch (selecao) {
        case 'rotacao':
            mensagem = "🌱 <strong>Resultado:</strong> Redução de até <strong>30%</strong> no uso de fertilizantes químicos e melhora de 45% na biodiversidade do solo.";
            break;
        case 'gotejamento':
            mensagem = "💧 <strong>Resultado:</strong> Economia de até <strong>60%</strong> no consumo de água e redução de pragas causadas pelo excesso de umidade.";
            break;
        case 'organico':
            mensagem = "🪱 <strong>Resultado:</strong> Eliminação total de defensivos químicos sintéticos e aumento de <strong>40%</strong> na retenção de carbono pelo solo.";
            break;
        default:
            mensagem = "⚠️ Por favor, selecione uma prática válida para calcular o impacto.";
    }

    // Exibe o resultado na tela com uma animação simples
    resultadoDiv.innerHTML = mensagem;
    resultadoDiv.style.opacity = 0;
    setTimeout(() => {
        resultadoDiv.style.opacity = 1;
        resultadoDiv.style.transition = "opacity 0.5s";
    }, 50);
}
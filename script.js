document.addEventListener('DOMContentLoaded', function() {
    console.log('Iniciando EmailJS');
    emailjs.init('-zyp1tlv8mqxWD8Lj');

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Formulário enviado');

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const pnumber = document.getElementById('pnumber').value;
        const mensagem = document.getElementById('mensagem').value;

        const templateParams = {
            from_name: nome,
            email: email,
            pnumber: pnumber,
            mensagem: mensagem,
        };

        emailjs.send('service_3z3p0or', 'template_3v4r3du', templateParams)
            .then(function(response) {
                alert('Mensagem enviada com sucesso!');
                console.log('E-mail enviado:', response);
                document.getElementById('contact-form-form').reset();
            }, function(error) {
                alert('Houve um erro ao enviar o e-mail. Tente novamente mais tarde.');
                console.error('Erro no envio do e-mail:', error);
            });
    });
});

document.getElementById('pnumber').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (value.startsWith('55')) {
        value = '+' + value;
    } else if (value.startsWith('1')) {
        value = '+' + value;
    } else {
        value = '+55' + value; // Adiciona o código do país se não estiver presente
    }

    // Formatar com máscara +55 (DDD) 12345-6789
    value = value.replace(/^(\+\d{2})(\d{2})(\d{4,5})(\d{4})$/, '$1 ($2) $3-$4');

    e.target.value = value;
});

document.addEventListener('DOMContentLoaded', function() {
    // Detectar o idioma do navegador
    const userLanguage = navigator.language || navigator.userLanguage;

    // Selecionar o elemento do banner
    const bannerElement = document.getElementById('banner');

    // Definir o src da imagem com base no idioma
    function setBanner(language) {
        if (language.startsWith('pt')) {
            // Se o idioma for português
            bannerElement.src = "img/2.png";
            bannerElement.alt = 'Banner em Português';
        } else if (language.startsWith('en')) {
            // Se o idioma for inglês
            bannerElement.src = "img/1.png";
            bannerElement.alt = 'Banner em Inglês';
        } else {
            // Banner padrão para outros idiomas
            bannerElement.src = 'img/1.png';
            bannerElement.alt = 'Banner Padrão';
        }
    }

    // Aplicar o banner baseado no idioma do usuário
    setBanner(userLanguage);
});

document.addEventListener('DOMContentLoaded', function() {
    const userLanguage = navigator.language || navigator.userLanguage;

    function translatePage(language) {
        if (language.startsWith('pt')) {
            // Traduções para português
            document.getElementById('headline1').innerHTML = 'Transformamos <br> suas ideias em um negócio de <span class="sucess">sucesso!</span>';
            document.getElementById('headline2').innerHTML = 'Vamos tornar sua visão uma realidade <br> com soluções web inovadoras adaptadas <br> às suas necessidades.';
            document.getElementById('about-me-header').textContent = 'Vamos nos conhecer';
            document.getElementById('about-me-header2').textContent = 'Sobre mim'; 
            document.getElementById('mailcontact').textContent = 'Vamos começar seu projeto! 📈';
            document.getElementById('about-me-text').textContent = 'Olá, meu nome é Vicente. Sou estudante e desenvolvedor front-end freelancer com uma paixão por criar interfaces de usuário intuitivas e funcionais...';
            document.getElementById('lgw').innerHTML = 'Linguagens de programação <br> que trabalho!'
        } else {
            // Traduções para inglês ou outros idiomas
            document.getElementById('headline1').innerHTML = 'We turn your ideas into a <span class="sucess">thriving</span> business!';
            document.getElementById('headline2').innerHTML = 'Let’s bring your vision to life with innovative web solutions tailored to your needs.';
            document.getElementById('about-me-header').textContent = 'Get to Know Me';
            document.getElementById('mailcontact').textContent = 'Let’s start your project! 📈'
            document.getElementById('about-me-header2').textContent = 'About me'; 
            document.getElementById('about-me-text').textContent = 'Hello, my name is Vicente. I\'m a student and a freelance front-end developer with a passion for creating intuitive and functional user interfaces...';
            document.getElementById('lgw').innerHTML = 'Programming Languages I Work With:'
        }
    }

    translatePage(userLanguage);
});


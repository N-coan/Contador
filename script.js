document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Impede o envio real do formulário
  
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const sexo = document.querySelector("input[name='sexo']:checked");
    const escolaridade = document.getElementById("escolaridade").value;
    const estadocivil = document.getElementById("estadocivil").value;
    const numero = document.getElementById("numero").value;

  
    if (!nome || !email || !sexo || !escolaridade| !estadocivil| !numero) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }
  
    const dados = `
      ✅ Cadastro realizado com sucesso! Em breve iremos mandar um e-mail para você!
      ---------------------------
      Nome: ${nome}
      Email: ${email}
      Sexo: ${sexo.value}
      Escolaridade: ${escolaridade}
      Estado Civil: ${estadocivil}
      Número para contato: ${numero}
    `;
  
    alert(dados);
    this.reset(); // Limpa o formulário
  });
  
  // ========== DADOS DOS PRODUTOS ==========
            let produtos = JSON.parse(localStorage.getItem("produtos")) || [
                {
                    id: 1,
                    categoria: "feminino",
                    nome: "Vestido Floral Midi",
                    preco: 850.0,
                    imagem:
                        "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    imagemSecundaria:
                        "https://images.unsplash.com/photo-1585487000128-9c17d3ab1b68?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    descricao: "Vestido floral com corte midi e tecido leve",
                    tamanhos: ["P", "M", "G", "GG"],
                    cores: ["Vermelho", "Preto", "Branco"],
                    novo: true,
                    maisVendido: true,
                },
                {
                    id: 2,
                    categoria: "feminino",
                    nome: "Blazer Slim Fit",
                    preco: 1200.0,
                    imagem:
                        "image/FB_IMG_17557638386282074.jpg ",
                    imagemSecundaria:
                        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    descricao: "Blazer elegante para ocasiões especiais",
                    tamanhos: ["P", "M", "G"],
                    cores: ["Preto", "Cinza", "Azul Marinho"],
                    promocao: true,
                    precoOriginal: 1500.0,
                    maisVendido: true,
                },
                {
                    id: 3,
                    categoria: "feminino",
                    nome: "Saia Midi Plissada",
                    preco: 550.0,
                    imagem:
                        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    imagemSecundaria:
                        "https://images.unsplash.com/photo-1595341577359-329256ab5a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    descricao: "Saia midi plissada com tecido fluido",
                    tamanhos: ["P", "M", "G"],
                    cores: ["Preto", "Bordô", "Verde Militar"],
                    novo: true,
                },
                {
                    id: 4,
                    categoria: "masculino",
                    nome: "Camisa Social Slim",
                    preco: 450.0,
                    imagem:
                        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    imagemSecundaria:
                        "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    descricao: "Camisa social para o dia a dia",
                    tamanhos: ["P", "M", "G", "GG"],
                    cores: ["Branco", "Azul", "Rosa"],
                    novo: true,
                    maisVendido: true,
                },
                {
                    id: 5,
                    categoria: "masculino",
                    nome: "Calça Jeans Skinny",
                    preco: 600.0,
                    imagem:
                        "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    imagemSecundaria:
                        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    descricao: "Calça jeans modelo skinny",
                    tamanhos: ["38", "40", "42", "44"],
                    cores: ["Azul Claro", "Azul Escuro", "Preto"],
                    promocao: true,
                    precoOriginal: 750.0,
                    novo: true,
                    maisVendido: true,
                },
                {
                    id: 6,
                    categoria: "masculino",
                    nome: "Tênis Casual",
                    preco: 800.0,
                    imagem:
                        "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    imagemSecundaria:
                        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                    descricao: "Tênis casual para o dia a dia",
                    tamanhos: ["38", "39", "40", "41", "42"],
                    cores: ["Branco", "Preto", "Cinza"],
                    promocao: true,
                    precoOriginal: 950.0,
                },
            ];

            // ========== FUNÇÕES PRINCIPAIS ==========
            function salvarProdutos() {
                localStorage.setItem("produtos", JSON.stringify(produtos));
                carregarListaProdutosAdmin();
            }

            function configurarNavegacao() {
                // Carregar conteúdo inicial
                carregarDestaques();
                carregarMaisVendidos();
                carregarProdutos("feminino");
                carregarProdutos("masculino");

                // Configurar scroll suave para os links âncora
                document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
                    anchor.addEventListener("click", function (e) {
                        e.preventDefault();

                        // Remove a classe ativo de todos os links
                        document
                            .querySelectorAll(".link-navegacao, .link-navegacao-mobile")
                            .forEach((link) => {
                                link.classList.remove("ativo");
                            });

                        // Adiciona a classe ativo ao link clicado
                        this.classList.add("ativo");

                        // Obtém o ID da seção alvo
                        const targetId = this.getAttribute("href");

                        // Verifica se o link é para uma seção existente
                        if (targetId !== "#") {
                            const targetElement = document.querySelector(targetId);

                            if (targetElement) {
                                // Calcula a posição da seção considerando o cabeçalho fixo
                                const headerHeight =
                                    document.querySelector(".cabecalho").offsetHeight;
                                const targetPosition = targetElement.offsetTop - headerHeight;

                                // Rola suavemente até a seção
                                window.scrollTo({
                                    top: targetPosition,
                                    behavior: "smooth",
                                });
                            }
                        }

                        // Fecha o menu mobile se estiver aberto
                        fecharMenuMobile();
                    });
                });

                // Configurar botão do WhatsApp
                document.getElementById("botao-whatsapp").addEventListener("click", (e) => {
                    e.preventDefault();
                    const numero = "258 877162055";
                    const mensagem = "Olá! Gostaria de informações sobre os produtos ";
                    window.open(
                        `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
                        "_blank"
                    );
                });

                // Configurar botão de admin
                document.getElementById("botao-admin").addEventListener("click", (e) => {
                    e.preventDefault();
                    abrirAreaSenha();
                });

                // Configurar menu mobile
                document
                    .getElementById("botao-menu-mobile")
                    .addEventListener("click", abrirMenuMobile);
                document
                    .getElementById("botao-fechar-menu")
                    .addEventListener("click", fecharMenuMobile);
                document
                    .getElementById("overlay-menu-mobile")
                    .addEventListener("click", fecharMenuMobile);

                // Configurar área de senha
                document
                    .getElementById("confirmar-senha")
                    .addEventListener("click", verificarSenha);
                document
                    .getElementById("cancelar-senha")
                    .addEventListener("click", fecharAreaSenha);
                document
                    .getElementById("campo-senha")
                    .addEventListener("keypress", function (e) {
                        if (e.key === "Enter") {
                            verificarSenha();
                        }
                    });

                // Configurar área administrativa
                document
                    .getElementById("cancelar-admin")
                    .addEventListener("click", fecharAreaAdmin);
                document.getElementById("overlay-admin").addEventListener("click", (e) => {
                    if (e.target === document.getElementById("overlay-admin")) {
                        fecharAreaAdmin();
                    }
                });

                document
                    .getElementById("produto-promocao")
                    .addEventListener("change", function () {
                        document.getElementById("grupo-preco-original").style.display = this
                            .checked
                            ? "block"
                            : "none";
                    });

                document
                    .getElementById("formulario-admin")
                    .addEventListener("submit", adicionarProduto);

                // Configurar barra de pesquisa
                document
                    .getElementById("botao-pesquisa-mobile")
                    .addEventListener("click", (e) => {
                        e.preventDefault();
                        document.getElementById("barra-pesquisa").classList.toggle("ativo");
                    });

                document
                    .getElementById("botao-pesquisar")
                    .addEventListener("click", pesquisarProdutos);
                document
                    .getElementById("campo-pesquisa")
                    .addEventListener("keypress", function (e) {
                        if (e.key === "Enter") {
                            pesquisarProdutos();
                        }
                    });

                // Atualizar link ativo conforme rolagem
                window.addEventListener("scroll", atualizarLinkAtivo);
            }

            function abrirMenuMobile() {
                document.getElementById("container-menu-mobile").classList.add("ativo");
                document.getElementById("overlay-menu-mobile").style.display = "block";
                document.body.style.overflow = "hidden";
            }

            function fecharMenuMobile() {
                document.getElementById("container-menu-mobile").classList.remove("ativo");
                document.getElementById("overlay-menu-mobile").style.display = "none";
                document.body.style.overflow = "";
            }

            function abrirAreaSenha() {
                document.getElementById("overlay-senha").style.display = "flex";
                document.getElementById("campo-senha").focus();
                document.body.style.overflow = "hidden";
            }

            function fecharAreaSenha() {
                document.getElementById("overlay-senha").style.display = "none";
                document.getElementById("campo-senha").value = "";
                document.body.style.overflow = "";
            }

            function verificarSenha() {
                const senha = document.getElementById("campo-senha").value;
                if (senha === "FREEFIRE2024") {
                    fecharAreaSenha();
                    abrirAreaAdmin();
                } else {
                    alert("Senha incorreta!");
                    document.getElementById("campo-senha").value = "";
                    document.getElementById("campo-senha").focus();
                }
            }

            function abrirAreaAdmin() {
                document.getElementById("overlay-admin").style.display = "flex";
                document.body.style.overflow = "hidden";
                carregarListaProdutosAdmin();
            }

            function fecharAreaAdmin() {
                document.getElementById("overlay-admin").style.display = "none";
                document.body.style.overflow = "";
                document.getElementById("formulario-admin").reset();
                document.getElementById("grupo-preco-original").style.display = "none";

                // Limpar mensagens de erro
                document.querySelectorAll(".mensagem-erro").forEach((el) => {
                    el.style.display = "none";
                });
            }

            function carregarListaProdutosAdmin() {
                const lista = document.getElementById("lista-produtos");
                lista.innerHTML = "";

                if (produtos.length === 0) {
                    lista.innerHTML =
                        '<p style="text-align: center; padding: 20px;">Nenhum produto cadastrado.</p>';
                    return;
                }

                produtos.forEach((produto) => {
                    const item = document.createElement("div");
                    item.className = "produto-admin";

                    item.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <div class="produto-info">
                <h4>${produto.nome}</h4>
                <p>${produto.categoria === "feminino" ? "Feminino" : "Masculino"
                        } - ${produto.preco.toFixed(2)} MT</p>
            </div>
            <div class="produto-acoes">
                <button class="botao botao-perigo" data-id="${produto.id
                        }">Excluir</button>
            </div>
        `;

                    lista.appendChild(item);
                });

                // Configurar eventos dos botões de exclusão
                document.querySelectorAll(".produto-acoes button").forEach((botao) => {
                    botao.addEventListener("click", function () {
                        const id = parseInt(this.getAttribute("data-id"));
                        excluirProduto(id);
                    });
                });
            }

            function excluirProduto(id) {
                if (confirm("Tem certeza que deseja excluir este produto?")) {
                    const produtoIndex = produtos.findIndex((p) => p.id === id);

                    if (produtoIndex === -1) {
                        alert("Produto não encontrado!");
                        return;
                    }

                    // Armazena a categoria do produto antes de remover
                    const categoriaProduto = produtos[produtoIndex].categoria;

                    // Remove o produto do array
                    produtos.splice(produtoIndex, 1);
                    salvarProdutos();

                    // Recarregar todas as seções relevantes
                    carregarDestaques();
                    carregarMaisVendidos();
                    carregarProdutos(categoriaProduto);

                    alert("Produto excluído com sucesso!");
                }
            }

            function adicionarProduto(e) {
                e.preventDefault();

                // Validar formulário
                let valido = true;

                const tipo = document.getElementById("tipo-produto").value;
                const nome = document.getElementById("nome-produto").value.trim();
                const preco = parseFloat(document.getElementById("preco-produto").value);
                const imagem = document.getElementById("imagem-produto").files[0];
                const descricao = document.getElementById("descricao-produto").value.trim();

                // Validação dos campos obrigatórios
                const camposObrigatorios = [
                    {
                        campo: tipo,
                        erroId: "erro-tipo",
                        mensagem: "Selecione o tipo do produto",
                    },
                    { campo: nome, erroId: "erro-nome", mensagem: "Informe o nome do produto" },
                    {
                        campo: !isNaN(preco) && preco > 0,
                        erroId: "erro-preco",
                        mensagem: "Preço inválido",
                    },
                    { campo: imagem, erroId: "erro-imagem", mensagem: "Selecione uma imagem" },
                    {
                        campo: descricao,
                        erroId: "erro-descricao",
                        mensagem: "Informe a descrição",
                    },
                ];

                camposObrigatorios.forEach(({ campo, erroId, mensagem }) => {
                    const elementoErro = document.getElementById(erroId);
                    if (!campo) {
                        elementoErro.textContent = mensagem;
                        elementoErro.style.display = "block";
                        valido = false;
                    } else {
                        elementoErro.style.display = "none";
                    }
                });

                if (!valido) return;

                // Processar tamanhos e cores
                const tamanhos = document
                    .getElementById("tamanhos-produto")
                    .value.split(",")
                    .map((s) => s.trim())
                    .filter((s) => s);

                const cores = document
                    .getElementById("cores-produto")
                    .value.split(",")
                    .map((c) => c.trim())
                    .filter((c) => c);

                // Processar checkboxes
                const ehNovo = document.getElementById("produto-novo").checked;
                const ehPromocao = document.getElementById("produto-promocao").checked;
                const ehMaisVendido = document.getElementById("produto-mais-vendido").checked;

                let precoOriginal = null;
                if (ehPromocao) {
                    precoOriginal = parseFloat(
                        document.getElementById("preco-original-produto").value
                    );
                    if (isNaN(precoOriginal) || precoOriginal <= preco) {
                        document.getElementById("erro-preco-original").textContent =
                            precoOriginal <= preco
                                ? "Preço original deve ser maior que o preço promocional"
                                : "Preço original inválido";
                        document.getElementById("erro-preco-original").style.display = "block";
                        valido = false;
                    } else {
                        document.getElementById("erro-preco-original").style.display = "none";
                    }
                }

                if (!valido) return;

                // Processar imagens
                const leitor = new FileReader();
                leitor.onload = function (e) {
                    const urlImagem = e.target.result;

                    // Processar imagem secundária se existir
                    const imagemSecundaria = document.getElementById(
                        "imagem-secundaria-produto"
                    ).files[0];
                    if (imagemSecundaria) {
                        const leitorSecundario = new FileReader();
                        leitorSecundario.onload = function (e) {
                            const urlImagemSecundaria = e.target.result;
                            criarNovoProduto(
                                tipo,
                                nome,
                                preco,
                                urlImagem,
                                urlImagemSecundaria,
                                descricao,
                                tamanhos,
                                cores,
                                ehNovo,
                                ehPromocao,
                                ehMaisVendido,
                                precoOriginal
                            );
                        };
                        leitorSecundario.readAsDataURL(imagemSecundaria);
                    } else {
                        criarNovoProduto(
                            tipo,
                            nome,
                            preco,
                            urlImagem,
                            null,
                            descricao,
                            tamanhos,
                            cores,
                            ehNovo,
                            ehPromocao,
                            ehMaisVendido,
                            precoOriginal
                        );
                    }
                };
                leitor.readAsDataURL(imagem);
            }

            function criarNovoProduto(
                tipo,
                nome,
                preco,
                urlImagem,
                urlImagemSecundaria,
                descricao,
                tamanhos,
                cores,
                ehNovo,
                ehPromocao,
                ehMaisVendido,
                precoOriginal
            ) {
                // Gerar novo ID único
                const novoId =
                    produtos.length > 0 ? Math.max(...produtos.map((p) => p.id)) + 1 : 1;

                // Criar novo produto
                const novoProduto = {
                    id: novoId,
                    categoria: tipo,
                    nome: nome,
                    preco: preco,
                    imagem: urlImagem,
                    imagemSecundaria: urlImagemSecundaria || urlImagem,
                    descricao: descricao,
                    tamanhos: tamanhos,
                    cores: cores,
                    novo: ehNovo,
                    promocao: ehPromocao,
                    maisVendido: ehMaisVendido,
                };

                if (ehPromocao && precoOriginal) {
                    novoProduto.precoOriginal = precoOriginal;
                }

                // Adicionar ao array de produtos
                produtos.push(novoProduto);
                salvarProdutos();

                // Recarregar as seções afetadas
                if (ehNovo) carregarDestaques();
                if (ehMaisVendido) carregarMaisVendidos();
                carregarProdutos(tipo);

                // Fechar o formulário e mostrar mensagem
                fecharAreaAdmin();
                alert("Produto adicionado com sucesso!");
            }

            function pesquisarProdutos() {
                const termo = document
                    .getElementById("campo-pesquisa")
                    .value.trim()
                    .toLowerCase();

                if (!termo) {
                    alert("Por favor, digite um termo para pesquisar.");
                    return;
                }

                const resultados = produtos.filter(
                    (p) =>
                        p.nome.toLowerCase().includes(termo) ||
                        p.descricao.toLowerCase().includes(termo)
                );

                if (resultados.length === 0) {
                    alert("Nenhum produto encontrado com o termo: " + termo);
                    return;
                }

                // Criar uma seção temporária para mostrar os resultados
                const secaoTemporaria = document.createElement("div");
                secaoTemporaria.id = "resultados-pesquisa";
                secaoTemporaria.style.padding = "60px 0";

                const container = document.createElement("div");
                container.className = "container";

                const titulo = document.createElement("h2");
                titulo.className = "titulo-secao";
                titulo.textContent = `Resultados para: "${termo}"`;
                container.appendChild(titulo);

                const grade = document.createElement("div");
                grade.className = "grade-produtos";

                resultados.forEach((produto) => {
                    grade.appendChild(criarCardProduto(produto));
                });

                container.appendChild(grade);
                secaoTemporaria.appendChild(container);

                // Remover resultados anteriores se existirem
                const resultadosAnteriores = document.getElementById("resultados-pesquisa");
                if (resultadosAnteriores) {
                    resultadosAnteriores.remove();
                }

                // Adicionar os novos resultados após o cabeçalho
                document.body.insertBefore(
                    secaoTemporaria,
                    document.querySelector("section")
                );

                // Fechar a barra de pesquisa no mobile
                document.getElementById("barra-pesquisa").classList.remove("ativo");
                document.getElementById("campo-pesquisa").value = "";

                // Rolagem suave para os resultados
                window.scrollTo({
                    top:
                        secaoTemporaria.offsetTop -
                        document.querySelector(".cabecalho").offsetHeight,
                    behavior: "smooth",
                });
            }

            function atualizarLinkAtivo() {
                // Obtém todas as seções da página
                const secoes = document.querySelectorAll("section, footer");

                // Obtém a posição atual de rolagem
                const posicaoScroll =
                    window.scrollY + document.querySelector(".cabecalho").offsetHeight;

                // Itera sobre as seções para verificar qual está visível
                secoes.forEach((secao) => {
                    const topoSecao = secao.offsetTop;
                    const alturaSecao = secao.offsetHeight;

                    if (posicaoScroll >= topoSecao && posicaoScroll < topoSecao + alturaSecao) {
                        const id = secao.getAttribute("id");
                        const linkCorrespondente = document.querySelector(
                            `.link-navegacao[href="#${id}"]`
                        );
                        const linkMobile = document.querySelector(
                            `.link-navegacao-mobile[href="#${id}"]`
                        );

                        if (linkCorrespondente) {
                            // Remove a classe ativo de todos os links
                            document
                                .querySelectorAll(".link-navegacao, .link-navegacao-mobile")
                                .forEach((link) => {
                                    link.classList.remove("ativo");
                                });

                            // Adiciona a classe ativo ao link correspondente
                            linkCorrespondente.classList.add("ativo");
                            if (linkMobile) linkMobile.classList.add("ativo");
                        }
                    }
                });
            }

            function carregarDestaques() {
                const grade = document.getElementById("produtos-destaque");
                grade.innerHTML = "";

                // Pegar produtos marcados como novos
                const lancamentos = produtos.filter((p) => p.novo).slice(0, 4);

                if (lancamentos.length === 0) {
                    grade.innerHTML =
                        '<p style="text-align: center; grid-column: 1/-1;">Nenhum lançamento disponível.</p>';
                    return;
                }

                lancamentos.forEach((produto) => {
                    grade.appendChild(criarCardProduto(produto));
                });
            }

            function carregarMaisVendidos() {
                const grade = document.getElementById("produtos-mais-vendidos");
                grade.innerHTML = "";

                // Pegar produtos marcados como maisVendido
                const maisVendidos = produtos.filter((p) => p.maisVendido).slice(0, 4);

                if (maisVendidos.length === 0) {
                    grade.innerHTML =
                        '<p style="text-align: center; grid-column: 1/-1;">Nenhum produto em destaque.</p>';
                    return;
                }

                maisVendidos.forEach((produto) => {
                    grade.appendChild(criarCardProduto(produto));
                });
            }

            function carregarProdutos(categoria) {
                const grade = document.getElementById(`grade-${categoria}`);
                if (!grade) return;

                grade.innerHTML = "";

                const produtosFiltrados = produtos.filter((p) => p.categoria === categoria);

                if (produtosFiltrados.length === 0) {
                    grade.innerHTML =
                        '<p style="text-align: center; grid-column: 1/-1;">Nenhum produto encontrado.</p>';
                    return;
                }

                produtosFiltrados.forEach((produto) => {
                    grade.appendChild(criarCardProduto(produto));
                });
            }

            function criarCardProduto(produto) {
                const card = document.createElement("div");
                card.className = "card-produto";

                // Badges
                let badges = "";
                if (produto.novo) {
                    badges += `<span class="badge-produto badge-novo">Novo</span>`;
                }
                if (produto.promocao) {
                    badges += `<span class="badge-produto badge-promocao">Promoção</span>`;
                }

                // Preço
                let precoHTML = `<div class="preco-atual">${produto.preco.toFixed(
                    2
                )} MT</div>`;

                if (produto.promocao) {
                    precoHTML = `
            <div class="container-preco">
                <span class="preco-atual">${produto.preco.toFixed(2)} MT</span>
                <span class="preco-original">${produto.precoOriginal.toFixed(
                        2
                    )} MT</span>
            </div>
        `;
                }

                // Tamanhos
                let tamanhosHTML = "";
                if (produto.tamanhos && produto.tamanhos.length > 0) {
                    tamanhosHTML = `
            <div class="seletor-tamanho">
                ${produto.tamanhos
                            .map((t) => `<span class="opcao-tamanho">${t}</span>`)
                            .join("")}
            </div>
        `;
                }

                card.innerHTML = `
        <div class="container-imagem-produto">
            ${badges}
            <img src="${produto.imagem}" alt="${produto.nome}" style="width: 100%; height: 100%; object-fit: cover;">
            <img src="${produto.imagemSecundaria}" alt="${produto.nome}" class="imagem-produto-secundaria">
        </div>
        <div class="info-produto">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            ${precoHTML}
            ${tamanhosHTML}
            <button class="botao botao-principal" style="width: 100%;">Comprar Agora</button>
        </div>
    `;

                // Configurar seleção de tamanho
                card.querySelectorAll(".opcao-tamanho").forEach((tamanho) => {
                    tamanho.addEventListener("click", function () {
                        card
                            .querySelectorAll(".opcao-tamanho")
                            .forEach((t) => t.classList.remove("selecionado"));
                        this.classList.add("selecionado");
                    });
                });

                // Configurar botão de compra
                card.querySelector("button").addEventListener("click", () => {
                    const tamanhoSelecionado = card.querySelector(".opcao-tamanho.selecionado");
                    if (!tamanhoSelecionado && produto.tamanhos.length > 0) {
                        alert("Por favor, selecione um tamanho antes de comprar.");
                        return;
                    }

                    const numero = "258 877162055";
                    let mensagem = `Olá! Gostaria de comprar o produto: ${produto.nome}`;

                    if (tamanhoSelecionado) {
                        mensagem += ` (Tamanho: ${tamanhoSelecionado.textContent})`;
                    }

                  mensagem += ` - Preço: ${produto.preco.toFixed(2)} MT`;

                    window.open(
                        `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
                        "_blank"
                    );
                });

                return card;
            }

            // ========== INICIALIZAÇÃO ==========
            document.addEventListener("DOMContentLoaded", () => {
                configurarNavegacao();

                if (!localStorage.getItem("produtos")) {
                    salvarProdutos();
                }
            });
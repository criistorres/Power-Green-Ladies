# Power Green Ladies - Roadmap de Desenvolvimento

## 🎯 Visão Geral do Projeto

**Missão:** Inspirar, acolher e guiar mulheres imigrantes e todas que precisam recomeçar em sua jornada de empoderamento, cura e profissionalização.

**Stack Técnica:**
- Django + HTMX + Alpine.js + Tailwind CSS
- PostgreSQL
- Deploy: Heroku + S3

---

## 📋 MVP - Versão Mínima Viável

### **Fase 1: Fundação e Interface Pública** 
**Prazo:** 4-6 semanas  
**Status:** 🔄 Planejado

#### 1.1 Setup do Projeto
- [ ] **Configuração Django** - Setup inicial, models básicos, admin
- [ ] **Integração Tailwind** - Migração do CSS atual para Tailwind
- [ ] **Configuração HTMX** - Setup para interatividade
- [ ] **Deploy Base** - Ambiente de desenvolvimento e staging

#### 1.2 Interface Pública (Migração do Design Atual)
- [ ] **Homepage** - Hero section com vídeo de fundo, CTA's principais
- [ ] **Páginas Estáticas** 
  - Quem Somos
  - O Que Oferecemos  
  - Contato
- [ ] **Footer** - Links, redes sociais, informações legais
- [ ] **Responsividade** - Mobile-first, todos os breakpoints

#### 1.3 Sistema de Idiomas (PT/EN/ES)
- [ ] **Django i18n** - Configuração multilíngue
- [ ] **Seletor de Idioma** - Switch rápido na navbar
- [ ] **Tradução Básica** - Conteúdo essencial das páginas

#### 1.4 SOS Mulheres - Básico
- [ ] **Botão SOS Fixo** - Design e posicionamento
- [ ] **Formulário de Contato** - Campos básicos para coleta
- [ ] **Integração WhatsApp** - Mensagem pré-formatada
- [ ] **Opções de Emergência** - Botões categorizados (violência doméstica, acidente, etc.)

---

### **Fase 2: Sistema de Doações** 
**Prazo:** 2-3 semanas  
**Status:** 🔄 Planejado

#### 2.1 Doações Pontuais
- [ ] **Página de Doação** - Layout atrativo, call-to-actions
- [ ] **PIX Integration** - QR Code dinâmico, chave PIX
- [ ] **Opções US** - Stripe/PayPal para doadores americanos
- [ ] **Confirmação** - Email automático, recibo de doação

#### 2.2 Sistema de Transparência
- [ ] **Dashboard Público** - Valores arrecadados (opcional)
- [ ] **Relatórios de Impacto** - Como o dinheiro é usado

---

### **Fase 3: Sistema Ela Superou - Dinâmico** 
**Prazo:** 3-4 semanas  
**Status:** 🔄 Planejado

#### 3.1 Models e Estrutura
- [ ] **Model Season/Temporada** - Título, descrição, ordem, status ativo/inativo
- [ ] **Model Video** - Vinculado à temporada, URL, título, descrição, thumbnail
- [ ] **Admin Interface** - Django admin customizado para facilitar cadastro
- [ ] **Relacionamentos** - Foreign key entre Video e Season

#### 3.2 Frontend Dinâmico
- [ ] **Listagem Automática** - Vídeos aparecem automaticamente por temporada
- [ ] **Player Responsivo** - Embed YouTube/Vimeo otimizado
- [ ] **Navegação Inteligente** - Próximo/anterior episódio automático
- [ ] **Filtros** - Por temporada, mais recentes

#### 3.3 Features Administrativas
- [ ] **Upload Thumbnails** - Imagens de capa para cada vídeo
- [ ] **Preview Mode** - Ver como ficará no site antes de publicar
- [ ] **Ordem Customizada** - Drag & drop para reorganizar vídeos
- [ ] **Status Draft/Published** - Controle de publicação

---

## 🚀 Versão Completa - Plataforma Dinâmica

### **Fase 4: Área Administrativa** 
**Prazo:** 3-4 semanas  
**Status:** 🔄 Planejado

#### 4.1 Sistema de Autenticação
- [ ] **Login/Logout** - Interface customizada
- [ ] **Níveis de Permissão** - Admin, Editor, Moderador
- [ ] **Recuperação de Senha** - Email de reset
- [ ] **Dashboard Admin** - Visão geral das atividades

#### 4.2 Gestão de Usuários
- [ ] **CRUD Usuários** - Criar, editar, desativar
- [ ] **Perfis de Acesso** - Diferentes roles e permissões
- [ ] **Log de Atividades** - Quem fez o quê e quando

---

### **Fase 5: Sistema de Eventos** 
**Prazo:** 2-3 semanas  
**Status:** 🔄 Planejado

#### 5.1 Gestão de Eventos
- [ ] **Model Event** - Nome, data, descrição, imagem, localização
- [ ] **CRUD Eventos** - Interface admin para criar/editar
- [ ] **Categorias** - Workshops, palestras, reuniões de apoio
- [ ] **Status** - Agendado, em andamento, finalizado

#### 5.2 Frontend de Eventos
- [ ] **Calendário** - View mensal/semanal de eventos
- [ ] **Página do Evento** - Detalhes, inscrição, compartilhamento
- [ ] **Filtros** - Por data, categoria, localização
- [ ] **RSVP** - Sistema básico de confirmação de presença

---

### **Fase 6: Sistema de Patrocínio** 
**Prazo:** 4-5 semanas  
**Status:** 🔄 Planejado

#### 6.1 Cadastro de Patrocinadores
- [ ] **Formulário de Interesse** - Empresa, contato, tipo de apoio
- [ ] **Níveis de Patrocínio** - Bronze, Prata, Ouro, Diamante
- [ ] **Benefícios por Nível** - Logo no site, menções, etc.
- [ ] **Aprovação Manual** - Review antes de ativar

#### 6.2 Doações Recorrentes
- [ ] **Stripe Subscriptions** - Pagamentos mensais/anuais
- [ ] **Dashboard Patrocinador** - Login para acompanhar contribuições
- [ ] **Certificados** - PDF automático para fins fiscais
- [ ] **Comunicação** - Email updates sobre impacto

#### 6.3 Visibilidade de Patrocinadores
- [ ] **Página de Apoiadores** - Logos e reconhecimento
- [ ] **Footer/Sidebar** - Exibição rotativa de logos
- [ ] **Relatórios** - Métricas de exposição para patrocinadores

---

### **Fase 7: Blog e Conteúdo** 
**Prazo:** 2-3 semanas  
**Status:** 🔄 Planejado

#### 7.1 Sistema de Blog
- [ ] **Model Post** - Artigos com rich text editor
- [ ] **Categorias e Tags** - Organização do conteúdo
- [ ] **SEO Avançado** - Meta descriptions, URLs amigáveis
- [ ] **Agendamento** - Posts programados

#### 7.2 Features de Engajamento
- [ ] **Comentários** - Sistema moderado
- [ ] **Compartilhamento** - Redes sociais
- [ ] **Newsletter** - Captação de emails
- [ ] **RSS Feed** - Para subscribers

---

### **Fase 8: SOS Mulheres - Avançado** 
**Prazo:** 3-4 semanas  
**Status:** 🔄 Planejado

#### 8.1 Sistema de Emergência Robusto
- [ ] **Categorização Detalhada** - Tipos de emergência, gravidade
- [ ] **Geolocalização** - Recursos locais baseados na localização
- [ ] **Recursos por Estado** - Contatos de apoio regionais (EUA)
- [ ] **Modo Discreto** - Interface que não deixa rastros

#### 8.2 Rede de Apoio
- [ ] **Profissionais Voluntários** - Cadastro de psicólogos, advogados
- [ ] **Chat Anônimo** - Sistema de conversa segura
- [ ] **Recursos Educativos** - Guias sobre direitos, leis americanas
- [ ] **Integração 911** - Botão direto para emergências reais

---

### **Fase 9: Loja Solidária** 
**Prazo:** 4-6 semanas  
**Status:** 🔄 Planejado

#### 9.1 E-commerce Básico
- [ ] **Produtos Artesanais** - Feitos por mulheres do programa
- [ ] **Sistema de Pedidos** - Carrinho, checkout
- [ ] **Integração Pagamento** - Stripe/PayPal + PIX
- [ ] **Gestão de Estoque** - Admin para controlar produtos

#### 9.2 Impacto Social
- [ ] **Perfis de Artesãs** - História de quem fez o produto
- [ ] **Rastreamento de Impacto** - Quantas mulheres foram beneficiadas
- [ ] **Marketplace** - Possibilidade de outras mulheres venderem

---

## 📊 Métricas e Analytics

*Analytics e insights estão incluídos na Fase 10 do roadmap acima.*

---

### **Fase 10: Dados e Insights** 
**Prazo:** 2 semanas  
**Status:** 🔄 Planejado

#### 10.1 Analytics
- [ ] **Google Analytics** - Comportamento dos usuários
- [ ] **Dashboard Interno** - Métricas customizadas
- [ ] **Relatórios Automáticos** - Emails semanais/mensais
- [ ] **A/B Testing** - Otimização de conversões

#### 10.2 Feedback e Melhoria
- [ ] **Sistema de Feedback** - Usuários podem sugerir melhorias
- [ ] **Pesquisas** - NPS, satisfação
- [ ] **Heatmaps** - Como usuários interagem com o site

#### 10.3 Features Avançadas para Vídeos
- [ ] **Sistema de Favoritos** - Usuários podem salvar vídeos
- [ ] **Comentários** - Sistema básico de feedback em vídeos
- [ ] **Analytics de Vídeos** - Visualizações, tempo assistido por episódio

---

## 🎨 Especificações de Design

### **Design System**
- **Cores:** Verde (#2d7d32), Rosa claro (#f8bbd9), Dourado (#ffd700)
- **Fontes:** Poppins (principal), Playfair Display (títulos), Dancing Script (decorativa)
- **Elementos:** Folhas, flores, aquarelas, ícones femininos
- **Responsive:** Mobile-first, breakpoints otimizados

### **Componentes Reutilizáveis**
- [ ] **Cards** - Vídeos, eventos, artigos
- [ ] **Botões** - Primário, secundário, SOS
- [ ] **Forms** - Contato, doação, cadastro
- [ ] **Navigation** - Navbar responsiva, breadcrumbs
- [ ] **Modals** - Alpine.js para interações

---

## 🚀 Cronograma Geral

| Fase | Descrição | Duração | Status |
|------|-----------|---------|--------|
| 1-3 | **MVP** (Interface + SOS + Doações + Ela Superou Dinâmico) | 9-14 semanas | 🔄 Planejado |
| 4-5 | **Core Admin** (Autenticação + Eventos) | 5-7 semanas | ⏸️ Aguardando |
| 6-8 | **Advanced Features** (Patrocínio + Blog + SOS Avançado) | 9-12 semanas | ⏸️ Aguardando |
| 9-10 | **E-commerce & Analytics** (Loja + Dados) | 6-8 semanas | ⏸️ Aguardando |

**Total MVP:** 9-14 semanas  
**Total Completo:** 29-41 semanas (~7-10 meses)

---

## 🔧 Considerações Técnicas

### **Performance**
- [ ] **CDN** - Assets estáticos
- [ ] **Caching** - Redis para sessões e cache
- [ ] **Otimização Imagens** - Compression automática
- [ ] **Lazy Loading** - Vídeos e imagens

### **Segurança**
- [ ] **HTTPS** - Certificado SSL obrigatório
- [ ] **CSRF Protection** - Django padrão
- [ ] **Rate Limiting** - Proteção contra spam
- [ ] **Backup** - Dados e media files

### **Escalabilidade**
- [ ] **Database Indexing** - Queries otimizadas
- [ ] **Static Files** - S3
- [ ] **Load Balancing** - Para crescimento futuro

---

## ✅ Legenda de Status

- 🔄 **Planejado** - Em análise e planejamento
- 🚧 **Em Desenvolvimento** - Ativamente sendo desenvolvido  
- ✅ **Concluído** - Pronto e testado
- 🔍 **Em Teste** - QA e validação
- ⏸️ **Aguardando** - Dependente de outras fases
- ❌ **Cancelado** - Removido do escopo

---

## 📝 Notas de Implementação

### **Prioridades MVP**
1. Interface pública funcionando perfeitamente
2. Sistema SOS básico funcionando
3. Doações PIX + internacional
4. **Sistema "Ela Superou" dinâmico** - Admin pode cadastrar vídeos/temporadas
5. Multilíngue essencial

### **Decisões Arquiteturais**
- **HTMX** para interatividade sem SPA complexity
- **Alpine.js** para UI rica onde necessário  
- **Tailwind** para consistency e desenvolvimento rápido
- **PostgreSQL** para robustez e escalabilidade

### **Considerações Especiais para Imigrantes US**
- Integração com sistemas de pagamento americanos
- Recursos de emergência adaptados para leis dos EUA
- Conteúdo localizado por estado quando relevante
- Acessibilidade em múltiplos idiomas

---
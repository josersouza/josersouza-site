migrate(
  (app) => {
    // Check if Leads collection already exists
    try {
      app.findCollectionByNameOrId('Leads')
      return // already exists
    } catch (_) {}

    const collection = new Collection({
      name: 'Leads',
      type: 'base',
      listRule: '@request.auth.id != ""',
      viewRule: '@request.auth.id != ""',
      createRule: '', // public can create leads from contact form
      updateRule: '@request.auth.id != ""',
      deleteRule: '@request.auth.id != ""',
      fields: [
        { name: 'nome', type: 'text', required: true },
        { name: 'telefone', type: 'text', required: true },
        { name: 'email', type: 'email' },
        { name: 'assunto', type: 'text' },
        { name: 'area_interesse', type: 'text' },
        { name: 'mensagem', type: 'text' },
        { name: 'sabio_status', type: 'text' },
        { name: 'sabio_response', type: 'json' },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(collection)
  },
  (app) => {
    try {
      const collection = app.findCollectionByNameOrId('Leads')
      app.delete(collection)
    } catch (_) {}
  },
)

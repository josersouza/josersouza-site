migrate(
  (app) => {
    try {
      const record = app.findFirstRecordByData(
        'Team_Members',
        'Nome',
        'Valdomiro Gomes de Medeiros',
      )
      record.set('Foto', '')
      app.save(record)
    } catch (err) {
      // Record might not exist, safe to skip
    }
  },
  (app) => {
    // Revert not strictly necessary
  },
)

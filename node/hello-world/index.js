const bigtable = require('@google-cloud/bigtable');

(async () => {
  try {
    const TABLE_NAME = 'Hello-Bigtable';
    const COLUMN_FAMILY_NAME = 'cf1'
    const COLUMN_NAME = 'greeting'

    const bigtableClient = bigtable({
      projectId: process.env.PROJECT_ID,
    });

    const instance = bigtableClient.instance('helloworld');

    const options = {
      families: [COLUMN_FAMILY_NAME]
    };

    console.log(`Creating table ${TABLE_NAME}`)
    const [table] = await instance.createTable(TABLE_NAME, options);

    console.log('Write some greetings to the table');
    const greetings = ['Hello World!', 'Hello Bigtable!', 'Hello HBase!'];
    const rowsToInsert = greetings.map((greeting, index) => ({
      key: `greeting${index}`,
      data: {
        [COLUMN_FAMILY_NAME]: {
          [COLUMN_NAME]: greeting
        },
      },
    }));
    await table.insert(rowsToInsert);

    console.log(`Retrieving all the rows:`)
    const [newRows] = await table.getRows();
    for (const row of newRows) {
      console.log(`\t${row.data[COLUMN_FAMILY_NAME][COLUMN_NAME][0].value}`);
    }

    console.log('Delete the table');
    await table.delete();

  } catch(error) {
    console.error("Something went wrong:", error);
  }

})();

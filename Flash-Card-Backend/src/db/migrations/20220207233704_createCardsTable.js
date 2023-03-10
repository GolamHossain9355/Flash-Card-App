exports.up = function (knex) {
  return knex.schema.createTable("cards", (table) => {
    table.increments("card_id").primary();
    table.text("card_front");
    table.text("card_back");

    table.integer("deck_id").unsigned().notNullable();
    table
      .foreign("deck_id")
      .references("deck_id")
      .inTable("decks")
      .onDelete("cascade");

    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("cards");
};

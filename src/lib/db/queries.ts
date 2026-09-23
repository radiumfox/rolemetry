import { db } from '@/lib/db/connection.js';

export const getQueries = (tableName: string) => {
  const getAll = function <TResult extends object>(callback: (error: unknown, result?: TResult[]) => void) {
    db.any(`SELECT * FROM ${tableName}`)
      .then((result) => {
        callback(null, result);
      })
      .catch((error) => {
        callback(error);
      });
  };

  const getSingleById = function <TResult>(id: string, callback: (error: unknown, result?: TResult) => void) {
    db.one(`SELECT * FROM ${tableName} WHERE id = $1`, [id])
      .then((result) => {
        callback(null, result);
      })
      .catch((error) => {
        callback(error);
      });
  };

  const addSingle = function <TResult>(
    fields: ReadonlyArray<string>,
    values: ReadonlyArray<unknown>,
    callback: (error: unknown, result?: TResult) => void
  ) {
    if (fields.length === 0 || fields.length !== values.length) {
      callback(new Error('fields and values must be non-empty and match in length'));
      return;
    }

    const placeholders = values.map((_, index) => `$${index + 1}`).join(', ');

    db.one(
      `INSERT INTO ${tableName} (${fields.join(', ')}) VALUES (${placeholders}) RETURNING *`,
      values
    )
      .then((result) => {
        callback(null, result);
      })
      .catch((error) => {
        callback(error);
      });
  };

  const deleteSingleById = function (id: string, callback: (error: unknown, result?: boolean) => void) {
    db.result(`DELETE FROM ${tableName} WHERE id = $1`, [id])
      .then((result) => {
        callback(null, Boolean(result.rowCount));
      })
      .catch((error) => {
        callback(error);
      });
  };

  return {
    getAll,
    getSingleById,
    addSingle,
    deleteSingleById
  };
};

'use server';

import pool from '../../database/database';

export interface GachaShop {
  id: number,
  min_gr: number,
  min_hr: number,
  name: string,
  url_banner: string,
  url_feature: string,
  url_thumbnail: string,
  wide: boolean,
  recommended: boolean,
  gacha_type: number,
  hidden: boolean,
};

export const getGachaShopData = async (limit: number, offset: number): Promise<GachaShop[] | null >=> {
  const query = `
    SELECT
      *
    FROM
      gacha_shop
    ORDER BY
      id
    ASC LIMIT
      $1
    OFFSET
      $2;
  `;

  try {
    const { rows } = await pool.query(query, [limit, offset]);
    return rows;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const markGachaItemsAsRecommended = (items: GachaShop[], isActive: boolean) => {
  const query = `
    UPDATE
      gacha_shop
    SET
      recommended = $1
    WHERE
      id = ANY($2);
  `;

  try {
    const idList = items.map(items => items.id);

    pool.query(query, [isActive, idList]);
  } catch (error) {
    console.error(error);
  }
};

export const markGachaItemsAsHide = (items: GachaShop[], isActive: boolean) => {
  const query = `
    UPDATE
      gacha_shop
    SET
      hidden = $1
    WHERE
      id = ANY($2);
  `;

  try {
    const idList = items.map(items => items.id);

    pool.query(query, [isActive, idList]);
  } catch (error) {
    console.error(error);
  }
};

export const deleteGachaItems = (items: GachaShop[]) => {
  const query = `
    UPDATE
      gacha_shop
    SET
      recommended = true
    WHERE
      id IN (2, 3, 5);
  `;

  try {
    const idList = items.map(items => items.id);

    pool.query(query);
  } catch (error) {
    console.error(error);
  }
};

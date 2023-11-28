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


export const getGachaShopData = async (limit: number, offset: number): Promise<GachaShop[]> => {
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

  const { rows } = await pool.query(query, [limit, offset]);
  return rows;
};

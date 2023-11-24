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

export const getGachaShopData = async (gachaType: number, limit: number, offset: number): Promise<GachaShop[]> => {
  const query = `
    SELECT
      *
    FROM
      gacha_shop
    WHERE
      gacha_type = $1
    ORDER BY
      id
    ASC LIMIT
      $2
    OFFSET
      $3;
  `;

  const { rows } = await pool.query(query, [gachaType, limit, offset]);
  return rows;
};

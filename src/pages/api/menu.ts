// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import getMenu, { Data } from '@/lib/menu'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const menu = getMenu()

  res.status(200).json({ ...menu })
}

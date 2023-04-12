// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  value: any,
  dados: Object
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ 
    value: Math.random().toFixed(2).substring(2),
    dados:{
      id:1,
      nome:'João'
    }
  })
}

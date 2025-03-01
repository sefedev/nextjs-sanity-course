import 'server-only'

import { defineLive } from 'next-sanity'
import { client } from '@/sanity/client'

export const { sanityFetch, SanityLive } = defineLive({ client })
import { Metadata } from '@musical-patterns/metadata'
import { post } from './posts'

const metadata: Metadata = {
    description: post,
    formattedName: 'Bapbo',
    mostRecentPublish: process.env.PUBLISH_DATE || '2018-10-31T07:00:00.000Z',
    musicalIdeaIllustrated: '',
    originalPublish: '2019-10-08T07:00:00.000Z',
    version: process.env.PATTERN_VERSION || 'unknown',
}

export {
    metadata,
}

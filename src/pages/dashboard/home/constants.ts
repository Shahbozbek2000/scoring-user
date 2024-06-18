import { ReactComponent as IconApply } from '@/assets/icons/apply.svg'
import { ReactComponent as IconContracts } from '@/assets/icons/contracts.svg'
import { ReactComponent as IconStatistics } from '@/assets/icons/statistics.svg'
import { ReactComponent as IconTechnicSupport } from '@/assets/icons/technical-support.svg'
import { ReactComponent as IconDocuments } from '@/assets/icons/documents.svg'
import { ReactComponent as IconVideo } from '@/assets/icons/video.svg'
import { ReactComponent as IconPersonal } from '@/assets/icons/personal.svg'

export const pages = [
  {
    id: 1,
    name: 'Videoqo`llanma',
    Icon: IconVideo,
    link: 'video-instruction',
    disabled: false,
    show: true,
  },
  {
    id: 2,
    name: 'Shaxsiy ma`lumotlar',
    Icon: IconPersonal,
    link: 'personal-information',
    disabled: false,
    show: true,
  },
  { id: 3, name: 'Arizalar', Icon: IconApply, link: 'apply', disabled: false, show: true },
  {
    id: 4,
    name: 'Shartnomalar',
    Icon: IconContracts,
    link: 'contracts',
    disabled: false,
    show: true,
  },
  { id: 4, name: 'Sug’urta', Icon: IconContracts, link: 'insurance', disabled: false, show: false },
  {
    id: 5,
    name: 'Hisobotlar',
    Icon: IconDocuments,
    link: 'documents',
    disabled: true,
    show: false,
  },
  {
    id: 6,
    name: 'To‘lovlar',
    Icon: IconStatistics,
    link: 'payment-status',
    disabled: false,
    show: false,
  },
  {
    id: 7,
    name: 'Texnik yordam',
    Icon: IconTechnicSupport,
    link: 'technical-support',
    disabled: true,
    show: false,
  },
]

import { ReactComponent as IconApply } from '@/assets/icons/apply.svg'
import { ReactComponent as IconContracts } from '@/assets/icons/contracts.svg'
import { ReactComponent as IconStatistics } from '@/assets/icons/statistics.svg'
import { ReactComponent as IconTechnicSupport } from '@/assets/icons/technical-support.svg'
import { ReactComponent as IconDocuments } from '@/assets/icons/documents.svg'

export const pages = [
  { id: 1, name: 'Videoqo`llanma', Icon: IconApply, link: 'video-instruction', disabled: false },
  {
    id: 2,
    name: 'Shaxsiy ma`lumotlar',
    Icon: IconApply,
    link: 'personal-information',
    disabled: false,
  },
  { id: 3, name: 'Arizalar', Icon: IconApply, link: 'apply', disabled: false },
  { id: 4, name: 'Shartnomalar', Icon: IconContracts, link: 'contracts', disabled: false },
  { id: 4, name: 'Sug’urta', Icon: IconContracts, link: 'insurance', disabled: false },
  { id: 5, name: 'Hisobotlar', Icon: IconDocuments, link: 'documents', disabled: true },
  { id: 6, name: 'To‘lovlar', Icon: IconStatistics, link: 'payment-status', disabled: false },
  {
    id: 7,
    name: 'Texnik yordam',
    Icon: IconTechnicSupport,
    link: 'technical-support',
    disabled: true,
  },
]

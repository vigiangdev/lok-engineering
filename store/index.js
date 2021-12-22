import axios from 'axios'

export const state = () => ({
  activeProject: null,
  projectsHome: [
    {
      id: 1,
      title: '626 54th Street',
      location: 'Oakland, CA',
      slug: '626-54th-street',
      image: '01.webp',
      header: 'A NEW KIND OF ENGINEERING COMPANY',
      quote: 'Innovative solutions that are within your budget',
    },
    {
      id: 2,
      title: '1406 Fairview Street',
      location: 'Berkeley, CA',
      slug: '1406-fairview-street',
      image: '01.webp',
      header: 'STELLAR REPUTATION',
      quote: 'Always delivering more than expected',
    },
  ],
  projects: [
    {
      id: 1,
      title: '626 54th Street',
      location: 'Oakland, CA',
      slug: '626-54th-street',
      thumbnail: '01.webp',
      images: ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'],
      description: 'This was a complete remodel.',
      engineer: 'Lok Engineering',
      architect: "Architect's Name Company",
      contractor: "Contractor's Name Company",
    },
    {
      id: 2,
      title: '1406 Fairview Street',
      location: 'Berkeley, CA',
      slug: '1406-fairview-street',
      thumbnail: '01.webp',
      images: ['01.webp', '02.webp', '03.webp', '04.webp'],
      description:
        'This was a remodel of a single-family residence in Berkeley, CA.',
      engineer: 'Lok Engineering',
      architect: "Architect's Name Company",
      contractor: "Contractor's Name Company",
    },
  ],
  staffs: [
    {
      role: 'Principal Engineer',
      description: `Ryan Lok is the principal engineer of Lok Engineering. He received a BS in Structural Engineering at the University of California, San Diego and has accumulated 8 years of engineering experience in residential construction.`,
      image: `ryan.webp`,
    },
    {
      role: 'Principal Engineer',
      description: `Vi Giang is a co-principal engineer of Lok Engineering. He received a BS in Structural Engineering at the University of California, San Diego and has accumulated 8 years of engineering experience in residential construction.`,
      image: `ryan.webp`,
    },
  ],
  processes: [
    {
      stylePrefix: 'fas',
      icon: 'comments',
      size: '2x',
      title: 'Consultation',
      message: `Send photos, plans, or sketches for our review. We will
          address any questions or concerns via phone, videochat, or email.`,
    },
    {
      stylePrefix: 'fas',
      icon: 'envelope-open-text',
      size: '2x',
      title: 'Proposal',
      message: `Once we have an understanding of your needs, we will send a
          detailed proposal for the scheduled work.`,
    },
    {
      stylePrefix: 'fas',
      icon: 'calendar-alt',
      size: '2x',
      title: 'Turnaround',
      message: `Your project will be worked on right away. Depending on the scope of
          the project, it may take a day or a few weeks. We will provide an
          estimate of completion.`,
    },
    {
      stylePrefix: 'fas',
      icon: 'pencil-ruler',
      size: '2x',
      title: 'Permitting',
      message: `Structural drawings and engineering calculations will be provided, which can be submitted to the city to obtain the required permits.`,
    },
  ],
})

export const getters = {
  projects(state) {
    return state.projects
  },
  projectsHome(state) {
    return state.projectsHome
  },
  projectBySlug(state) {
    return (slug) => {
      return state.projects.find((project) => project.slug === slug)
    }
  },
  activeProject(state) {
    return state.activeProject
  },
  staffs(state) {
    return state.staffs
  },
  processes(state) {
    return state.processes
  },
}

export const mutations = {
  setActiveProject(state, project) {
    state.activeProject = project
  },
  removeActiveProject(state) {
    state.activeProject = null
  },
}

export const actions = {
  async verifyToken(context, token) {
    const res = await axios({
      method: 'get',
      url: `/api/v1/recaptcha/${token}`,
    })
    return res.data
  },

  async addQuote(context, data) {
    const res = await axios({
      method: 'post',
      url: '/api/v1/quotes',
      data,
    })
    return res.data
  },

  async uploadFiles(context, data) {
    const res = await axios({
      method: 'post',
      url: `/api/v1/quotes/${data.quoteId}/file-upload`,
      data: data.files,
    })
    return res.data
  },

  async deleteFile(context, data) {
    const res = await axios({
      method: 'delete',
      url: `/api/v1/quotes/${data.quoteId}/${data.fileId}`,
    })
    return res.data
  },

  convertToFormData(context, files) {
    const formData = new FormData()
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i])
    }
    return formData
  },

  async sendEmail(context, data) {
    const res = await axios({
      method: 'post',
      url: '/api/v1/email',
      data,
    })
    return res
  },
}

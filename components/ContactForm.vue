<template>
  <div class="contact-form">
    <h2>Contact Us</h2>
    <form
      enctype="multipart/form-data"
      class="contactform"
      @submit.prevent="sendMessage"
    >
      <!-- <input type="hidden" name="_csrf" :value="csrfToken" /> -->
      <div class="container">
        <p>
          Fill out the form below if you have any questions or would like to
          receive a quote for your project.
        </p>
      </div>
      <div class="container">
        <label for="name">Name <span class="asterisk">*</span>:</label>
        <input id="name" v-model="data.name" type="text" name="name" required />
      </div>
      <div class="container">
        <label for="email">Email <span class="asterisk">*</span>:</label>
        <input
          id="email"
          v-model="data.email"
          type="email"
          name="email"
          required
        />
      </div>
      <div class="container">
        <label for="phone">Phone:</label>
        <input
          id="phone"
          v-model="data.phone"
          type="text"
          @input="acceptNumber"
        />
      </div>

      <div class="quote">
        <div class="flex-column">
          <div class="container">
            <label for="role">What is your role?:</label>
            <select id="role" v-model="data.role" name="role">
              <option default value="0">-</option>
              <option value="Architect">Architect</option>
              <option value="Contractor">Contractor</option>
              <option value="Developer">Developer</option>
              <option value="Owner">Owner</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div class="container">
          <label for="location"
            >Location <span class="asterisk">*</span>:</label
          >
          <input
            id="location"
            v-model="data.location"
            type="text"
            name="location"
            placeholder="(City, State)"
            required
          />
        </div>
        <div class="container">
          <label for="file-upload"
            >File Upload (Architectural Plan, Image, or Sketch):</label
          >
          <input
            id="file-upload"
            ref="file"
            type="file"
            name="file-upload"
            accept="image/jpeg, image/png, application/pdf"
            multiple
            @change="updateFiles"
          />
        </div>
      </div>

      <div class="container">
        <label for="description"
          >Project Description <span class="asterisk">*</span>:</label
        >
        <textarea
          id="description"
          v-model="data.description"
          name="description"
          cols="30"
          rows="10"
          required
        ></textarea>
      </div>

      <div class="container message">
        <p>
          We want to meet your project's timeline and budgeting goals. Let us
          know what you have in mind so we can better assist you.
        </p>
      </div>

      <div class="container">
        <label for="client-due-date"
          >Time Allotment for Structural Service:</label
        >
        <textarea
          id="client-due-date"
          v-model="data.clientDueDate"
          name="client-due-date"
          cols="30"
          rows="10"
        ></textarea>
      </div>

      <div class="container">
        <label for="budget">Budget for Structural Service:</label>
        <input
          id="budget"
          v-model="data.clientBudget"
          type="text"
          name="budget"
        />
      </div>

      <br />
      <div class="container">
        <label>How did you hear about us? (Check all that apply):</label>
        <div class="referral-container">
          <input
            id="referral"
            v-model="data.survey"
            type="checkbox"
            value="Referral"
          />
          <label for="referral">Referral</label>
        </div>
        <div class="referral-container">
          <input
            id="google"
            v-model="data.survey"
            type="checkbox"
            value="Google Search"
          />
          <label for="google">Google Search</label>
        </div>
        <div class="referral-container">
          <input id="yelp" v-model="data.survey" type="checkbox" value="Yelp" />
          <label for="yelp">Yelp</label>
        </div>
        <div class="referral-container">
          <input
            id="instagram"
            v-model="data.survey"
            type="checkbox"
            value="Instagram"
          />
          <label for="instagram">Instagram</label>
        </div>
        <div class="referral-container">
          <input
            id="tiktok"
            v-model="data.survey"
            type="checkbox"
            value="Tik Tok"
          />
          <label for="tiktok">Tik Tok</label>
        </div>
        <div class="referral-container">
          <input
            id="facebook"
            v-model="data.survey"
            type="checkbox"
            value="Facebook"
          />
          <label for="facebook">Facebook</label>
        </div>
        <div class="referral-container">
          <input
            id="linkedin"
            v-model="data.survey"
            type="checkbox"
            value="LinkedIn"
          />
          <label for="linkedin">LinkedIn</label>
        </div>
        <div class="referral-container">
          <input
            id="other"
            v-model="data.survey"
            type="checkbox"
            value="Other"
          />
          <label for="other">Other</label>
        </div>
      </div>

      <div class="container center">
        <recaptcha />
        <p v-if="error" class="error">Recaptcha Error. Please try again.</p>
      </div>

      <div class="btn-container">
        <AppButton type="submit">
          <span v-if="!isLoading" class="send">SEND</span>
          <svg
            v-if="isLoading"
            id="Layer_1"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            style="enable-background: new 0 0 50 50"
            xml:space="preserve"
          >
            <rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2">
              <animate
                attributeName="opacity"
                attributeType="XML"
                values="0.2; 1; .2"
                begin="0s"
                dur="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                attributeType="XML"
                values="10; 20; 10"
                begin="0s"
                dur="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                attributeType="XML"
                values="10; 5; 10"
                begin="0s"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="8" y="10" width="4" height="10" fill="#333" opacity="0.2">
              <animate
                attributeName="opacity"
                attributeType="XML"
                values="0.2; 1; .2"
                begin="0.15s"
                dur="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                attributeType="XML"
                values="10; 20; 10"
                begin="0.15s"
                dur="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                attributeType="XML"
                values="10; 5; 10"
                begin="0.15s"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="16" y="10" width="4" height="10" fill="#333" opacity="0.2">
              <animate
                attributeName="opacity"
                attributeType="XML"
                values="0.2; 1; .2"
                begin="0.3s"
                dur="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                attributeType="XML"
                values="10; 20; 10"
                begin="0.3s"
                dur="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                attributeType="XML"
                values="10; 5; 10"
                begin="0.3s"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
          </svg>
        </AppButton>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      error: '',
      token: '',
      isLoading: false,
      data: {
        name: '',
        phone: '',
        email: '',
        description: '',
        clientBudget: '',
        role: '',
        location: '',
        clientDueDate: '',
        survey: [],
        files: [],
      },
      files: [],
    }
  },

  async mounted() {
    await this.getCsrfToken()
  },

  methods: {
    ...mapActions([
      'getCsrfToken',
      'verifyToken',
      'getQuote',
      'addQuote',
      'deleteFile',
      'deleteQuote',
      'convertToFormData',
      'uploadFiles',
      'sendEmail',
    ]),
    acceptNumber() {
      const x = this.data.phone
        .replace(/\D/g, '')
        .match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
      this.data.phone = !x[2]
        ? x[1]
        : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '')
    },
    async getRecaptchaToken() {
      try {
        this.token = await this.$recaptcha.getResponse()
      } catch (error) {
        this.token = ''
        this.error = 'Error. Unable to retrieve reCAPTCHA token.'
      }
    },
    async resetRecaptchaToken() {
      this.token = ''
      try {
        await this.$recaptcha.reset()
      } catch (error) {
        this.error = 'Error. Unable to reset reCAPTCHA token.'
      }
    },
    async sendMessage() {
      try {
        this.isLoading = true
        await this.getRecaptchaToken()
        if (!this.token) {
          this.resetRecaptchaToken()
          this.isLoading = false
          this.error = 'Invalid reCAPTCHA. Please try again.'
          return
        } else {
          const tokenVerification = await this.verifyToken(this.token)
          if (tokenVerification.data.success) {
            let res = await this.addQuote(this.data)
            if (this.files) {
              const formData = await this.convertToFormData(this.files)
              const fileRes = await this.uploadFiles({
                quoteId: res.quote._id,
                files: formData,
              })
              this.data.files = fileRes.files
            }
            const emailRes = await this.sendEmail(this.data)

            res = await this.getQuote(res.quote._id)
            const updatedQuote = res.quote
            for (const file of updatedQuote.files) {
              await this.deleteFile({
                quoteId: updatedQuote._id,
                fileId: file._id,
              })
            }

            await this.deleteQuote(res.quote._id)

            if (emailRes.data.success) {
              this.$router.push({ path: '/contact/RedirectSuccess' })
            } else {
              this.resetRecaptchaToken()
              this.isLoading = false
              this.$router.push({ path: '/contact/RedirectFail' })
            }
          } else {
            this.resetRecaptchaToken()
            this.isLoading = false
            this.error = 'Unable to validate reCAPTCHA. Please try again.'
            return
          }
        }
      } catch (err) {
        await this.resetRecaptchaToken()
        this.$router.push({ path: '/contact/RedirectFail' })
      }
    },
    updateFiles(event) {
      this.files = event.target.files
    },
  },
}
</script>

<style scoped>
.contact-form {
  margin: 1rem;
  background-color: var(--color-gray-100);
  border: 2px solid var(--color-gray-100);
  border-radius: 2rem;
  overflow: hidden;
}

h2 {
  text-align: center;
  font-size: 1.6rem;
  font-weight: normal;
  padding: 2rem;
}

.contactform {
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  width: 100%;
  background-color: var(--color-gray-50);
  padding: 1rem;
}

.container {
  display: flex;
  flex-direction: column;
  margin: 0 0 0.5rem;
  width: 100%;
}

.flex-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

label {
  padding: 0.25rem 0;
}

.referral-container {
  margin: 0.5rem 0;
}

.btn-container {
  padding: 2rem 0;
}

input,
textarea {
  border: 1px solid var(--color-gray-300);
  background-color: white;
  padding: 0.5rem;
  transition: all 0.2s;
}

select {
  border: 1px solid var(--color-gray-300);
  background-color: white;
  padding: 0.5rem;
  transition: all 0.2s;
}

input:focus,
textarea:focus,
select:focus {
  outline: 1px solid var(--color-primary);
  transition: all 0.2s;
}

.files-list {
  margin: 0.5rem 0 0;
}

.files-list span {
  margin: 0 0.25rem;
  padding: 0.25rem 0.5rem;
}

.container p {
  margin: 1rem 0;
  font-size: 1.1rem;
  font-weight: 500;
}

.asterisk {
  color: red;
  font-weight: bold;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.error {
  color: red;
}

.send {
  background-color: inherit;
}

svg {
  background-color: var(--color-primary);
}

svg path,
svg rect {
  fill: var(--color-primary-contrast);
}

@media (min-width: 768px) {
  .flex-column {
    flex-direction: row;
    justify-content: space-between;
  }

  .contactform {
    padding: 1rem 2rem;
  }
}
</style>

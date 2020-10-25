<script>
export default {
    data: () => ({
        isSending: false,
        wasSendSuccessfully: false
    }),
    methods: {
        async handleFormSubmission(e) {
            e.preventDefault();
            this.isSending = true;
            const formData = new FormData(e.target);
            const res = await fetch('/', {
                method: "POST",
                body: formData
            });
            if(res.status === 200) {
                this.wasSendSuccessfully = true;

                setTimeout(() => {
                    this.wasSendSuccessfully = false;
                }, 1500)
            }
            this.isSending = false;
        }
    }
}
</script>
<template>
    <section class="contact grid" id="contact">
        <div class="contact_heading-wrapper">
            <h3 class="contact_heading text-stroke">CONTACT</h3>
            <h3 class="contact_heading">CONTACT</h3>
            <h3 class="contact_heading text-stroke">CONTACT</h3>   
        </div>
        <form 
            @submit="handleFormSubmission" 
            class="contact_form form"
            name="contact" 
            action="/" 
            method="POST"
        >
            <label class="form_label" for="mail">Email:</label>
            <input class="form_input" type="email" name="mail" id="mail">
            <label class="form_label" for="message">Message:</label>
            <textarea class="form_input" name="message" id="message" cols="30" rows="5"></textarea>
            <div class="form_submit">
                <button 
                    class="form_submit-btn btn"
                    type="submit"
                    v-bind:disabled="isSending || wasSendSuccessfully"
                    ref="submitBtn"
                >
                    <span class="btn_messages" v-bind:class="wasSendSuccessfully ? 'alter' : ''">
                        <span class="btn_message">
                            Send message
                        </span>
                        <span class="btn_message">
                            Message send!
                        </span>
                    </span>
                </button>
                <Spinner v-bind:isVisible="isSending" />
            </div>
        </form>
    </section>
</template>

<style lang="scss" scoped>
    .contact {
        margin-top: 5rem;

        @include media-breakpoint-up(lg) {
            margin-top: 10rem;
        }

        &_heading-wrapper {
            grid-column: 1 / -1;
            display: flex;
            justify-content: center;
            margin-bottom: 3rem;
        }

        &_heading {
            font-size: $font-4xl;
            line-height: $line-height-4xl;
            font-weight: 800;
        }
    }

    .form {
        grid-column: 1 / -1;

        @include media-breakpoint-up(lg) {
            grid-column: 4 / span 6;
        }

        &_label {
            display: block;
            margin-bottom: 1rem;
            color: $color-primary;
            font-family: 'IBM Plex Mono';
        }

        &_input {
            width: 100%;
            padding: 1rem;
            min-height: 3.75rem;
            margin-bottom: 1.5rem;
            color: $color-primary;
            border: 1px solid $color-primary;
            background: $color-black;
        }

        &_submit {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        &_submit-btn {
            width: 15rem;
            height: 3.25rem;
            color: $color-black;
            font-weight: 600;
            font-size: $font-xl;
            line-height: $line-height-xl;
            background: $color-primary;
        }
    }
    
    .btn {
        overflow: hidden;

        &:disabled {
            opacity: 0.9;
            cursor: not-allowed;
        }

        &_messages {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 200%;
            width: 100%;
            transition: transform 0.35s ease-in-out;

            &.alter {
                transform: translateY(-50%);
            }
        }

        &_message {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 50%;
        }
    }
</style>
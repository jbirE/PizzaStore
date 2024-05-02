<template>
    <!-- Footer -->
    <MDBFooter bg="dark" :text="['center', 'white']">
      <!-- Grid container -->
      <MDBContainer class="p-4">
        <!-- Section: Social media -->
        <section class="mb-4">
          <!-- Facebook -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><MDBIcon iconStyle="fab" icon="facebook-f"
          /></a>
          <!-- Twitter -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><MDBIcon iconStyle="fab" icon="twitter"
          /></a>
          <!-- Google -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><MDBIcon iconStyle="fab" icon="google"
          /></a>
          <!-- Instagram -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><MDBIcon iconStyle="fab" icon="instagram"
          /></a>
          <!-- Linkedin -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><MDBIcon iconStyle="fab" icon="linkedin-in"
          /></a>
          <!-- Github -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><MDBIcon iconStyle="fab" icon="github"></MDBIcon
          ></a>
        </section>
        <!-- Section: Social media -->
        <!-- Section: Form -->
        <section class="">
          <form action="">
            <!--Grid row-->
            <MDBRow center class="d-flex">
              <!--Grid column-->
              <MDBCol auto>
                <p class="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>
              <!--Grid column-->
              <!--Grid column-->
              <MDBCol md="5" col="12">
                <!-- Email input -->
                <MDBInput
                  white
                  type="email"
                  id="form5Example2"
                  label="Email address"
                  wrapperClass="mb-4"
                />
              </MDBCol>
              <!--Grid column-->
              <!--Grid column-->
              
            </MDBRow>
            <!--Grid row-->
          </form>
        </section>
      
        <section class="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam,
            commodi optio pariatur est quia magnam eum harum corrupti
            dicta, aliquam sequi voluptate quas.
          </p>
        </section>
        
       
      </MDBContainer>
      <!-- Grid container -->
      <!-- Copyright -->
      <div
        class="text-center p-3"
        style="background-color: rgba(0, 0, 0, 0.2)"
      >
        © 2024 Copyright:
      </div>
      <!-- Copyright -->
    </MDBFooter>
    <!-- Footer -->
  </template>
  
  <script>
  import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput } from 'mdb-vue-ui-kit';
  
  export default {
    components: {
      MDBFooter,
      MDBContainer,
      MDBRow,
      MDBCol,
      MDBIcon,
      MDBInput
    },
  };
  </script>
  
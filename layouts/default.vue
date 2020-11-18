<template>
  <div class="wrapper">
    <header>
      <Navbar />
    </header>
    <Begin />
    <Nuxt />
    <!--<Cart />-->
    <About />
    <Contacts />
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style>
</style>
<script>
import Navbar from "~/components/Navbar";
import Begin from "~/components/Begin";
/*import Cart from "~/components/Cart";*/
import About from "~/components/About";
import Contacts from "~/components/Contacts";
import Footer from "~/components/Footer";
export default {
  components: {Navbar, Begin, About, Contacts, Footer}
}
</script>

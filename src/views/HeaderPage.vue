<template>
    <nav id="header">
      <router-link to="/">HOME</router-link>
      <router-link to="/contact">Contact</router-link>
  <!------<a href="">Contact</a>  --->
    </nav>
    <router-view/>
  </template>
  
  <style scoped>
  a {
    background: black;
    color: #abbcc0;
    display: block;
    font: bold 12px/20px sans-serif;
    padding: 10px 25px;
    text-align: center;
    text-decoration: none;
    transition: all 0.25s ease;
  }
  a:hover {
    background: #f6f7f8;
  }
  #header {
    background: black;
    display: flex;
    justify-content: center;
  }
  </style>
  
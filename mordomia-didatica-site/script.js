{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener('DOMContentLoaded', () => \{\
  // Atualiza ano no rodap\'e9\
  const yearEl = document.getElementById('year');\
  if (yearEl) yearEl.textContent = new Date().getFullYear();\
\
  // Rolagem suave para links internos\
  document.querySelectorAll('a[href^="#"]').forEach(a => \{\
    a.addEventListener('click', e => \{\
      const id = a.getAttribute('href').substring(1);\
      const el = document.getElementById(id);\
      if (el) \{\
        e.preventDefault();\
        el.scrollIntoView(\{behavior:'smooth', block:'start'\});\
      \}\
    \});\
  \});\
\
  // Formul\'e1rio de contato simples (mailto)\
  const form = document.getElementById('contact-form');\
  form?.addEventListener('submit', (e) => \{\
    e.preventDefault();\
    const data = Object.fromEntries(new FormData(form).entries());\
    const subject = encodeURIComponent('Contato via site - Mordomia Did\'e1tica');\
    const body = encodeURIComponent(\
      `Nome: $\{data.name\}\\nEmail: $\{data.email\}\\nTelefone: $\{data.phone\}\\nMensagem:\\n$\{data.message\}`\
    );\
    window.location.href = `mailto:contato@mordomiadidatica.com?subject=$\{subject\}&body=$\{body\}`;\
  \});\
\});}
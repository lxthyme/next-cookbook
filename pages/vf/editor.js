import Head from 'next/head'
import dynamic from 'next/dynamic'
// export const config = { amp: true };
import React, { useEffect } from 'react'
// import Quill from 'quill'

// const Quill = dynamic(() => import('quill'), {
//   ssr: false,
// })

const EditorComp = (props) => {
  useEffect(() => {
    if (typeof Quill === 'undefined') {
      console.log('编辑器初始化失败, 请重试!')
      return
    }

    /// custom fonts
    const Font = Quill.import('formats/font')
    // We do not add Aref Ruqaa since it is the default
    Font.whitelist = ['mirza', 'roboto']
    Quill.register(Font, true)

    /// size & background-color & color
    const BackgroundClass = Quill.import('attributors/class/background')
    const ColorClass = Quill.import('attributors/class/color')
    const SizeStyle = Quill.import('attributors/style/size')
    Quill.register(BackgroundClass, true)
    Quill.register(ColorClass, true)
    Quill.register(SizeStyle, true)

    // Check for unsaved data
    window.onbeforeunload = function () {
      if (change.length() > 0) {
        return 'There are unsaved changes. Are you sure you want to leave?'
      }
    }
    const quill = new Quill('#editor-container', {
      modules: {
        toolbar: '#toolbar-container',
        // toolbar: [
        //   [{ header: [1, 2, 3, 4, 5, 6, false] }],
        //   ['bold', 'italic', 'underline'],
        //   ['image', 'code-block'],
        // ],
      },
      placeholder: 'Compose an epic...',
      theme: 'snow',
    })
    // $('[data-toggle="tooltip"]').tooltip();
    // document.querySelector('[data-toggle="tooltip"]').tooltip()

    /// auto save
    const Delta = Quill.import('delta')
    let change = new Delta()
    quill.on('text-change', function (delta) {
      change = change.compose(delta)
    })
    // Save periodically
    setInterval(function () {
      if (change.length() > 0) {
        console.log('Saving changes', change)
        /*
      Send partial changes
      $.post('/your-endpoint', {
        partial: JSON.stringify(change)
      });

      Send entire document
      $.post('/your-endpoint', {
        doc: JSON.stringify(quill.getContents())
      });
      */
        change = new Delta()
      }
    }, 5 * 1000)

    window.q = quill
    console.log('Quill: ', Quill)
  })
  return (
    <>
      <Head>
        <link
          href="https://cdn.quilljs.com/1.3.6/quill.snow.css"
          rel="stylesheet"
        ></link>
        <script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>
      </Head>
      <div id="toolbar-container">
        <select defaultValue="Aref" className="ql-font">
          <option value="Aref">Aref Ruqaa</option>
          <option value="mirza">Mirza</option>
          <option value="roboto">Roboto</option>
        </select>
        <button
          className="ql-bold"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Bold"
        ></button>
        <button
          className="ql-italic"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Add italic text <cmd+i>"
        ></button>
        <span className="ql-formats">
          <select defaultValue="16px" className="ql-size">
            <option value="10px">Small</option>
            <option value="16px">Normal</option>
            <option value="18px">Large</option>
            <option value="32px">Huge</option>
          </select>
        </span>
        <span className="ql-formats">
          <select defaultValue="white" className="ql-color">
            <option value="white"></option>
            <option value="red"></option>
            <option value="orange"></option>
            <option value="yellow"></option>
            <option value="green"></option>
            <option value="blue"></option>
            <option value="purple"></option>
          </select>
          <select className="ql-background">
            <option value="white"></option>
            <option value="red"></option>
            <option value="orange"></option>
            <option value="yellow"></option>
            <option value="green"></option>
            <option value="blue"></option>
            <option value="purple"></option>
          </select>
        </span>
      </div>
      <div id="editor-container">
        <p>Hello World!</p>
        <p>
          Some initial <strong>bold</strong> text
        </p>
      </div>
      <style jsx global>{`
        /* Set default font-family */
        #editor-container {
          font-family: 'Aref Ruqaa';
          font-size: 18px;
          height: 375px;
        }

        /* Set dropdown font-families */
        #toolbar-container .ql-font span[data-label='Aref Ruqaa']::before {
          font-family: 'Aref Ruqaa';
        }
        #toolbar-container .ql-font span[data-label='Mirza']::before {
          font-family: 'Mirza';
        }
        #toolbar-container .ql-font span[data-label='Roboto']::before {
          font-family: 'Roboto';
        }

        /* Set content font-families */
        .ql-font-mirza {
          font-family: 'Mirza';
        }
        .ql-font-roboto {
          font-family: 'Roboto';
        }
        /* We do not set Aref Ruqaa since it is the default font */
      `}</style>
    </>
  )
}

// EditorComp.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// EditorComp.getInitialProps = async ({ req }) => {}

// export default EditorComp

// export const config = { amp: true };

const Page = (props) => {
  return (
    <>
      <EditorComp />
      {/* <style jsx>{``}</style> */}
    </>
  )
}

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}

export default Page

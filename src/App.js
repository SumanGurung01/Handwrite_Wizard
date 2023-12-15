import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import page1 from './asset/page1.png';
import page2 from './asset/page2.png';
import page3 from './asset/page3.png';
import page4 from './asset/page4.png';
import logo from './asset/logo.png';
import './App.css';

function App() {

  const HANDWRITING = ["'Annie Use Your Telescope', cursive", "'Indie Flower', cursive", "'La Belle Aurore', cursive", "'Sue Ellen Francisco', cursive", "'Zeyada', cursive", "'Cedarville Cursive', cursive", "'Dawning of a New Day', cursive", "'Reenie Beanie', cursive", "'Waiting for the Sunrise', cursive"
  ]

  const FONT_SIZE = [10, 12, 14, 16, 18, 20, 22, 24, 26]

  const INK = ['black', 'blue', 'red', 'green']

  const SPACE = [0, 2, 4, 6, 8, 10]

  const PAGEIMAGE = [page1, page2, page3, page4]

  const PAGETYPE = ["Black Border", "Red Border", "Blue Border", "No Border"]

  const DEFAULT_CONTENT = 'The pursuit of knowledge and self-awareness is a lifelong voyage, where each experience, challenge, and reflection contributes to our personal growth and understanding, illuminating the path to a more enriched and purposeful existence.'


  const [fontSize, setFontSize] = useState(FONT_SIZE[3])
  const [handwriting, setHandwriting] = useState(HANDWRITING[0])
  const [paragraph, setParagraph] = useState(DEFAULT_CONTENT)
  const [ink, setInk] = useState(INK[0])
  const [space, setSpace] = useState(SPACE[0])
  const [page, setPage] = useState(PAGETYPE[0])
  const containerRef = useRef(null);

  const outputStyle = {
    fontFamily: handwriting,
    fontSize: fontSize,
    color: ink,
    wordSpacing: space,
    background: `url(${PAGEIMAGE[PAGETYPE.indexOf(page)]})`,
  };

  const handleTextChange = (e) => {
    setParagraph(e.target.value);
  };


  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  }

  const handleHandwritingChange = (e) => {
    setHandwriting(e.target.value);
  }

  const handleInkChange = (e) => {
    setInk(e.target.value);
  }

  const handleSpaceChange = (e) => {
    setSpace(e.target.value);
  }

  const handlePageChange = (e) => {
    setPage(e.target.value);
  }

  const handleSaveImage = () => {
    const container = containerRef.current;

    // Use html2canvas to capture the screenshot
    html2canvas(container).then(function (canvas) {

      // Convert the canvas to a data URL
      const imageDataURL = canvas.toDataURL('image/png');

      // Create a link to download the image
      const a = document.createElement('a');
      a.href = imageDataURL;
      a.download = 'assignment.png';
      a.style.display = 'none';
      document.body.appendChild(a);

      // Trigger a click event on the link to start the download
      a.click();

      // Remove the link element
      document.body.removeChild(a);
    });
  };

  return (
    <div className="app">

      <div className="app__navbar">
        <div className="navbar__item">

          <div className="logo__name">
            <img
              src={logo}
              className="logo"
            >
            </img>
            <h1>
              Handwrite Wizard
            </h1>
          </div>

          <div className="link">
            <a href="#get_started">
              Get Started
            </a>
            <a href="https://github.com/SumanGurung01/Handwrite_Wizard" target="_blank">
              Github
            </a>
          </div>

        </div>
      </div>

      <div className="app__header">
        <h2 className="app__header__h2">Transform text into Handwritten notes with</h2>
        <h1 className="app__header__h1">Handwrite Wizard</h1>
        <p className="app__header__p" align="center">Give your digital words a touch of handwritten soul <br></br>and make your notes uniquely yours.</p>
      </div>

      <div className='app__option' id="get_started">
        <div>
          <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small-label">Text Size</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={fontSize}
              label="Text Size"
              onChange={handleFontSizeChange}
            >
              {
                FONT_SIZE.map(size => <MenuItem value={size}>{size} pt</MenuItem>)
              }

            </Select>
          </FormControl>
        </div>


        <div>
          <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small-label">Handwriting</InputLabel>
            <Select
              style={{ fontFamily: handwriting }}
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={handwriting}
              label="Handwriting____"
              onChange={handleHandwritingChange}
            >
              {
                HANDWRITING.map(style => <MenuItem value={style} style={{ fontFamily: style }}>Sample Text</MenuItem>)
              }

            </Select>
          </FormControl>
        </div>


        <div>
          <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small-label">Ink Color</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={ink}
              label="Ink Color"
              onChange={handleInkChange}
            >
              {
                INK.map(color => <MenuItem value={color} style={{ color: color }}>{color}</MenuItem>)
              }

            </Select>
          </FormControl>
        </div>


        <div>
          <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small-label">Word Spacing</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={space}
              label="Word Spacing"
              onChange={handleSpaceChange}
            >
              {
                SPACE.map(wordspace => <MenuItem value={wordspace}>{wordspace} pt</MenuItem>)
              }

            </Select>
          </FormControl>
        </div>


        <div>
          <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small-label">Page Style</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={page}
              label="Page Style"
              onChange={handlePageChange}
            >
              {
                PAGETYPE.map(type => <MenuItem value={type}>{type}</MenuItem>)
              }

            </Select>
          </FormControl>
        </div>


        <div>
          <button
            style={{ width: 200, height: 39 }}
            className="button"
            onClick={handleSaveImage}>DOWNLOAD</button>
        </div>

      </div>



      <div className="app__content">

        <div>
          <p className="app__content__p1">Input</p>
          <p className="app__content__p2"><i>type or paste text here</i></p>
          <textarea
            className="app__content__textarea"
            placeholder="start writing here ..."
            value={paragraph}
            onChange={handleTextChange}
          >
          </textarea>
        </div>


        <div>
          <p className="app__content__p1 pre">Output</p>
          <p className="app__content__p2 pre"><i>the assignment will look like below</i></p>
          <pre className="app__content__pre" ref={containerRef} style={outputStyle}>{paragraph}</pre>
        </div>

      </div>

      <br></br>
      <br></br>



    </div>

  );
}

export default App;

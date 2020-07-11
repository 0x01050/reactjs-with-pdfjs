import React, { Component } from 'react';
import './App.css';
import PDFViewer from './components/PDFViewer/PDFViewer';
import PDFJSBackend from './backends/pdfjs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PDFViewer 
          backend={PDFJSBackend}
          src='/معلقة عنترة.pdf'
          initial={[
            {
              page: 1, x: 55, y: 10, post: {
                description: 'الشعراء ما خلو لنا موضع نتحدث فيه، واذكر شاعر نظم من هذا الشطر قصيدة كامله مطلعها :يا معشر البلغاء هل من لوذعي يهدي حجاه لمقصدٍ لم يُبلغِ',
                datetime: '7/6/2020, 02:01:07 PM'
              }
            },
            {
              page: 1, x: 10, y: 10, post: {
                description: 'لم يتركوا شيئا الا رجعوا انغاماتهم بأنشاء الشعر وانشاده',
                datetime: '7/6/2020, 02:02:56 PM'
              }
            },
            {
              page: 1, x: 55, y: 70, post: {
                description: 'القصيييدة جميلة لكن غريب أنه يمدح المنطقة والمكان بكثرة الذباب',
                datetime: '7/6/2020, 02:03:23 PM'
              }
            }
          ]}
        />
      </div>
    );
  }
}

export default App;
import React, { useState } from 'react';

const Sidebar = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const styles = {
    sidebar: {
      height: '100vh',
      width: '250px',
      backgroundColor: '#2c3e50',
      color: 'white',
      paddingTop: '20px',
      position: 'fixed',
      left: 0,
      top: 0,
      overflowY: 'auto',
    },
    link: {
      display: 'block',
      padding: '12px 20px',
      color: 'white',
      textDecoration: 'none',
      fontSize: '18px',
      cursor: 'pointer',
      userSelect: 'none',
    },
    submenu: {
      backgroundColor: '#34495e',
      paddingLeft: '30px',
    },
    content: {
      marginLeft: '250px',
      padding: '20px',
    },
  };

  return (
    <>
      <div style={styles.sidebar}>
        <a href="#" style={styles.link}>Dashboard</a>
        <div 
          style={styles.link} 
          onClick={() => setShowSubmenu(!showSubmenu)}
        >
          Transaksi {showSubmenu ? 'icon' : 'icon'}
        </div>
        {showSubmenu && (
          <div style={styles.submenu}>
            <a href="#" style={styles.link}>Penjualan</a>
            <a href="#" style={styles.link}>Pembelian</a>
            <a href="#" style={styles.link}>Laporan Transaksi</a>
          </div>
        )}
        <a href="#" style={styles.link}>Profile</a>
        <a href="#" style={styles.link}>Settings</a>
      </div>
      <div style={styles.content}>
        <h1>Halaman Utama</h1>
        <p>Isi konten aplikasi di sini.</p>
      </div>
    </>
  );
};

export default Sidebar;

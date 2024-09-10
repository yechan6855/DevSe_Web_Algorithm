import React from 'react';
import { Link as RouterLink, LinkProps, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { styled } from '@mui/system';
import { ButtonProps } from '@mui/material/Button';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const NavButtons = styled(Box)({
  display: 'flex',
  gap: '1rem',
});

const Logo = styled('img')({
  height: '40px',
  marginRight: '10px',
});

const StyledButton = styled(Button)<ButtonProps & LinkProps>(() => ({
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const menuItems = [
    { text: '대시보드', path: '/' },
    { text: '문제집', path: '/problems' },
    { text: '질문게시판', path: '/questions' },
    { text: '학습자료실', path: '/materials' },
    { text: '랭킹', path: '/ranking' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" sx={{ bgcolor: '#1A237E' }}> {/* 남색으로 고정 */}
        <StyledToolbar>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Logo src="/logo.png" alt="DevSe 로고" />
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#FFFFFF' }}>
              DevSe
            </Typography>
          </Box>
          <NavButtons>
            {menuItems.map((item) => (
              <StyledButton
                key={item.text}
                component={RouterLink}
                to={item.path}
                sx={{ 
                  bgcolor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                  }
                }}
              >
                {item.text}
              </StyledButton>
            ))}
          </NavButtons>
        </StyledToolbar>
      </AppBar>
      <Container component="main" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        {children}
      </Container>
      <Box component="footer" sx={{ py: 3, bgcolor: '#1A237E', mt: 'auto' }}> {/* 푸터도 동일한 남색으로 설정 */}
        <Container maxWidth="lg">
          <Typography variant="body2" color="#FFFFFF" align="center">
            © 2023 DevSe. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default Layout;
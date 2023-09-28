import React from 'react';
import Navbar from './Navbar'
import ScrollToTop from "./ScrollToTop"
import CustomStyles from '@/styles/general/Navbar';

export default function Layout({ children }: { children: React.ReactElement }) {
    return (
        <CustomStyles.PageWrapper>
            <Navbar />
            {children}
            <ScrollToTop />
        </CustomStyles.PageWrapper>
    )
}
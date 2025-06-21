import React from 'react';
import {
    Box, Typography, IconButton, InputBase, Paper, Button, TextField,
    InputAdornment, Menu, MenuItem
} from '@mui/material';
import {
    Search as SearchIcon, QrCodeScanner as QrCodeScannerIcon, SyncAlt as SyncAltIcon,
    Close as CloseIcon, Add as AddIcon, ArrowDropDown as ArrowDropDownIcon,
    LocalMallOutlined as LocalMallOutlinedIcon, Undo as UndoIcon, Redo as RedoIcon,
    PrintOutlined as PrintOutlinedIcon, Menu as MenuIcon, EditOutlined as EditOutlinedIcon,
    FlashOn as FlashOnIcon, History as HistoryIcon, LocalShippingOutlined as LocalShippingOutlinedIcon
} from '@mui/icons-material';

const AddSuaChuaPage = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', bgcolor: '#f0f2f5', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
            {/* Header */}
            <Paper elevation={0} sx={{
                display: 'flex', alignItems: 'center', p: '8px 16px', bgcolor: '#007bff',
                color: 'white', flexShrink: 0, borderRadius: 0, gap: 1.5, position: 'relative', zIndex: 10
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'white', borderRadius: '4px', p: '6px 10px', flexBasis: '350px' }}>
                    <SearchIcon sx={{ color: 'text.secondary', mr: 1, fontSize: '1.2rem' }} />
                    <InputBase placeholder="Tìm hàng hóa (F3)" sx={{ color: 'black', flex: 1, fontSize: '0.9rem' }} />
                    <QrCodeScannerIcon sx={{ color: 'text.secondary', fontSize: '1.2rem' }} />
                </Box>

                {/* Tabs */}
                <Box sx={{ display: 'flex', alignItems: 'flex-end', height: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', color: 'white', p: '8px 12px', borderRadius: '4px 4px 0 0', cursor: 'pointer', '&:hover': {bgcolor: 'rgba(255,255,255,0.1)'} }}>
                        <Typography variant="body2" sx={{ mr: 1, fontSize: '0.9rem', fontWeight: 500 }}>Hóa đơn 1</Typography>
                        <CloseIcon sx={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)' }} />
                    </Box>
                     <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'white', color: 'black', p: '8px 12px', borderRadius: '4px 4px 0 0', borderBottom: 'none' }}>
                        <Typography variant="body2" sx={{ mr: 1, fontSize: '0.9rem', fontWeight: 500 }}>Sửa chữa 1</Typography>
                        <CloseIcon sx={{ fontSize: '1rem', cursor: 'pointer', color: 'text.secondary' }} />
                    </Box>
                    <Box id="add-button" onClick={handleClick} sx={{ display: 'flex', alignItems: 'center', p: '4px', mb: '1px', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '4px', ml: 1, cursor: 'pointer', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                        <AddIcon sx={{ fontSize: '1.1rem' }} />
                        <ArrowDropDownIcon sx={{ fontSize: '1.2rem' }} />
                    </Box>
                    <Menu id="add-menu" anchorEl={anchorEl} open={open} onClose={handleClose} PaperProps={{ sx: { mt: 1.5, borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } }}>
                        <MenuItem onClick={handleClose}>Thêm mới đặt hàng</MenuItem>
                        <MenuItem onClick={handleClose}>Thêm mới sửa chữa</MenuItem>
                    </Menu>
                </Box>
                
                <Box sx={{ flexGrow: 1 }} />

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                    <LocalMallOutlinedIcon /> <UndoIcon /> <RedoIcon /> <PrintOutlinedIcon />
                    <Typography variant="body2" sx={{ fontSize: '0.9rem', letterSpacing: '0.5px' }}>03665******</Typography>
                    <MenuIcon />
                </Box>
            </Paper>

            {/* Main Content */}
            <Box sx={{ display: 'flex', flexGrow: 1, p: '16px', gap: '16px', position: 'relative' }}>
                <Box sx={{ flex: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <Button variant="contained" startIcon={<AddIcon />} sx={{ bgcolor: '#6fa6de', color: 'white', textTransform: 'uppercase', fontSize: '1rem', fontWeight: 'bold', py: 1.5, px: 4, borderRadius: '50px', '&:hover': { bgcolor: '#5a8dca' } }}>
                        Thêm mới
                    </Button>
                </Box>

                <Paper sx={{ flex: 1.5, minWidth: '400px', p: '20px', display: 'flex', flexDirection: 'column', borderRadius: '8px', border: '1px solid #dee2e6' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Button endIcon={<ArrowDropDownIcon />} sx={{ p:0, textTransform: 'none', color: 'black', fontWeight: 'bold' }}>Van Anh</Button>
                        <Button endIcon={<ArrowDropDownIcon />} sx={{ p:0, textTransform: 'none', color: 'black', fontWeight: 'bold' }}>Tại cửa hàng</Button>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>26/05/2025 15:19</Typography>
                    </Box>
                    <TextField variant="standard" placeholder="Tìm khách hàng (F4)" fullWidth InputProps={{ startAdornment: (<InputAdornment position="start"><SearchIcon sx={{ color: 'text.secondary' }} /></InputAdornment>), endAdornment: (<InputAdornment position="end"><AddIcon sx={{ cursor: 'pointer', color: 'primary.main', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1rem' }} /></InputAdornment>), sx: { fontSize: '0.9rem' } }} />
                    <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}><Typography>Tổng tiền hàng</Typography><Typography>0</Typography></Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}><Typography>Giảm giá</Typography><Typography>0</Typography></Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #ccc', pb: 2 }}><Typography sx={{ fontWeight: 'bold' }}>Khách cần trả</Typography><Typography sx={{ fontWeight: 'bold', color: '#007bff' }}>0</Typography></Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}><Typography>Tiền thừa trả khách</Typography></Box>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button variant="contained" fullWidth sx={{ textTransform: 'uppercase', py: 1.2, fontSize: '1rem', fontWeight: 'bold', boxShadow: 'none' }}>Lưu</Button>
                </Paper>

                <Box sx={{ position: 'absolute', bottom: 16, left: 16, right: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Paper component={Button} sx={{ textTransform: 'none', color: 'text.primary', p: '8px 16px', borderRadius: '8px', border: '1px solid #dee2e6', bgcolor: 'white' }}>
                        <EditOutlinedIcon sx={{ mr: 1, color: 'text.secondary' }} /><Typography variant="body2">Ghi chú đơn hàng</Typography>
                    </Paper>
                    <Box /> 
                </Box>
            </Box>
            
             {/* Footer */}
             <Paper elevation={2} sx={{ display: 'flex', justifyContent: 'flex-end', p: '8px 16px', gap: 3, flexShrink: 0, borderRadius: 0, borderTop: '1px solid #dee2e6' }}>
                <Button sx={{ textTransform: 'none', color: 'text.primary', fontSize: '0.9rem', fontWeight: 500 }} startIcon={<FlashOnIcon />}>Bán nhanh</Button>
                <Button sx={{ textTransform: 'none', color: 'text.primary', fontSize: '0.9rem', fontWeight: 500 }} startIcon={<HistoryIcon />}>Bán thường</Button>
                <Button variant="contained" sx={{ textTransform: 'none', fontSize: '0.9rem', fontWeight: 500, boxShadow: 'none' }} startIcon={<LocalShippingOutlinedIcon />}>Bán giao hàng</Button>
            </Paper>
        </Box>
    );
};

export default AddSuaChuaPage; 
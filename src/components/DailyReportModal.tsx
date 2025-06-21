import React from 'react';
import {
    Modal,
    Box,
    Typography,
    IconButton,
    Toolbar,
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    InputBase,
    Divider,
} from '@mui/material';
import {
    Close as CloseIcon,
    Refresh as RefreshIcon,
    Undo as UndoIcon,
    Redo as RedoIcon,
    SkipPrevious as SkipPreviousIcon,
    NavigateBefore as NavigateBeforeIcon,
    NavigateNext as NavigateNextIcon,
    SkipNext as SkipNextIcon,
    SaveAlt as SaveAltIcon,
    Print as PrintIcon,
    Search as SearchIcon,
    ZoomIn as ZoomInIcon,
    ZoomOut as ZoomOutIcon,
    CalendarToday as CalendarTodayIcon,
    ArrowDropDown as ArrowDropDownIcon,
    Add as AddBoxOutlinedIcon,
} from '@mui/icons-material';

interface DailyReportModalProps {
    open: boolean;
    onClose: () => void;
}

const tableData = [
    { id: 1, maGiaoDich: 'Hóa đơn: 1', thoiGian: '', sl: 16, doanhThu: 0, thuKhac: 0, vat: 0, phiTraHang: 0, thucThu: 0 },
];

const HeaderButton = ({ children, icon }: { children: React.ReactNode, icon: React.ReactElement }) => (
    <Box sx={{
        border: '1px solid #ccc',
        borderRadius: '4px',
        p: '4px 8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '32px',
        cursor: 'pointer',
        '&:hover': { bgcolor: 'action.hover' }
    }}>
        <Typography variant="body2" sx={{ mr: 1, whiteSpace: 'nowrap' }}>{children}</Typography>
        {React.cloneElement(icon, { sx: { fontSize: '1.1rem', color: 'text.secondary' } })}
    </Box>
);

const DailyReportModal: React.FC<DailyReportModalProps> = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose} aria-labelledby="daily-report-modal-title">
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '95vw',
                maxWidth: '1500px',
                height: '95vh',
                bgcolor: '#f5f5f5',
                boxShadow: 24,
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #ddd'
            }}>
                {/* Header */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: '8px 16px',
                    bgcolor: 'white',
                    borderBottom: '1px solid #ddd',
                    borderTop: '3px solid #0d6efd'
                }}>
                    <Typography variant="h6" component="h2" sx={{ fontWeight: '600', fontSize: '1rem' }}>
                        Báo cáo cuối ngày
                    </Typography>
                    <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <HeaderButton icon={<CalendarTodayIcon />}>04/06/2025</HeaderButton>
                        <HeaderButton icon={<ArrowDropDownIcon />}>Khổ A4</HeaderButton>
                        <HeaderButton icon={<ArrowDropDownIcon />}>Nhân viên</HeaderButton>
                        <HeaderButton icon={<ArrowDropDownIcon />}>Người tạo</HeaderButton>
                    </Box>

                    <Box sx={{ flexGrow: 1 }} />

                    <IconButton onClick={onClose} aria-label="close" size="small">
                        <CloseIcon />
                    </IconButton>
                </Box>

                {/* Toolbar */}
                <Toolbar variant="dense" sx={{
                    bgcolor: '#f5f5f5',
                    borderBottom: 1,
                    borderColor: 'divider',
                    flexWrap: 'wrap',
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.2 }}>
                        <IconButton size="small"><UndoIcon /></IconButton>
                        <IconButton size="small"><RedoIcon /></IconButton>
                        <IconButton size="small"><RefreshIcon /></IconButton>
                        <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                        <IconButton size="small"><SkipPreviousIcon /></IconButton>
                        <IconButton size="small"><NavigateBeforeIcon /></IconButton>
                        <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '4px', px: 1, py: '1px', mx: 0.5, bgcolor: 'white' }}>
                            <InputBase sx={{ width: 25, fontSize: '0.875rem', p: 0, 'input': { textAlign: 'center' } }} defaultValue="1" />
                            <Typography sx={{ mx: 0.5, fontSize: '0.875rem' }}>/</Typography>
                            <Typography sx={{ fontSize: '0.875rem' }}>1</Typography>
                        </Box>
                        <IconButton size="small"><NavigateNextIcon /></IconButton>
                        <IconButton size="small"><SkipNextIcon /></IconButton>
                        <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                        <IconButton size="small"><SaveAltIcon /></IconButton>
                        <IconButton size="small"><PrintIcon /></IconButton>
                        <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                        <IconButton size="small"><SearchIcon /></IconButton>
                        <IconButton size="small"><ZoomInIcon /></IconButton>
                        <IconButton size="small"><ZoomOutIcon /></IconButton>
                    </Box>
                </Toolbar>

                {/* Main Content Area */}
                <Box sx={{
                    p: '16px 24px',
                    flexGrow: 1,
                    overflowY: 'auto',
                    bgcolor: 'white',
                }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.8rem' }}>
                        Ngày lập: 04/06/2025 14:38
                    </Typography>

                    <Box sx={{ textAlign: 'center', my: 3 }}>
                        <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                            Báo cáo cuối ngày về bán hàng
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            <Typography variant="body1">Ngày bán: 04/06/2025</Typography>
                            <Typography variant="body1">Ngày thanh toán: 04/06/2025</Typography>
                            <Typography variant="body1">Chi nhánh: Chi nhánh trung tâm</Typography>
                        </Box>
                    </Box>

                    {/* Report Table */}
                    <TableContainer component={Paper} sx={{ boxShadow: 'none', border: '1px solid #dee2e6' }}>
                        <Table stickyHeader size="small" aria-label="daily report table">
                            <TableHead>
                                <TableRow sx={{
                                    '& .MuiTableCell-root': {
                                        bgcolor: '#cff4fc',
                                        fontWeight: '600',
                                        color: '#000',
                                        borderBottom: '1px solid #dee2e6',
                                        py: '8px',
                                        px: '12px',
                                        fontSize: '0.875rem'
                                    }
                                }}>
                                    <TableCell>Mã giao dịch</TableCell>
                                    <TableCell>Thời gian</TableCell>
                                    <TableCell align="right">SL</TableCell>
                                    <TableCell align="right">Doanh thu</TableCell>
                                    <TableCell align="right">Thu khác</TableCell>
                                    <TableCell align="right">VAT</TableCell>
                                    <TableCell align="right">Phí trả hàng</TableCell>
                                    <TableCell align="right">Thực thu</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tableData.map((row) => (
                                    <TableRow key={row.id} sx={{
                                        backgroundColor: '#fff',
                                        '&:last-child td, &:last-child th': { border: 0 },
                                        '& .MuiTableCell-root': {
                                            py: '6px',
                                            px: '12px',
                                            borderBottom: 'none',
                                            fontSize: '0.875rem'
                                        }
                                    }}>
                                        <TableCell>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Box component="span" sx={{
                                                    width: '14px',
                                                    height: '14px',
                                                    border: '1px solid #666',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    mr: 1,
                                                    cursor: 'pointer'
                                                }}>
                                                    <AddBoxOutlinedIcon sx={{ fontSize: '12px' }} />
                                                </Box>
                                                {row.maGiaoDich}
                                            </Box>
                                        </TableCell>
                                        <TableCell>{row.thoiGian}</TableCell>
                                        <TableCell align="right">{row.sl}</TableCell>
                                        <TableCell align="right">{row.doanhThu.toLocaleString('vi-VN')}</TableCell>
                                        <TableCell align="right">{row.thuKhac.toLocaleString('vi-VN')}</TableCell>
                                        <TableCell align="right">{row.vat.toLocaleString('vi-VN')}</TableCell>
                                        <TableCell align="right">{row.phiTraHang.toLocaleString('vi-VN')}</TableCell>
                                        <TableCell align="right">{row.thucThu.toLocaleString('vi-VN')}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Modal>
    );
};

export default DailyReportModal;
import { useState } from 'react';
import { Button } from '@mui/material';
import ReceiptModal from '../../components/ReceiptModal';
import RepairRequestModal from '../../components/RepairRequestModal';

export default function Home() {
  const [receiptModalOpen, setReceiptModalOpen] = useState(false);
  const [repairModalOpen, setRepairModalOpen] = useState(false);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome Home!</h1>
      
      <div className="space-y-4">
        <Button
          variant="contained"
          onClick={() => setReceiptModalOpen(true)}
          className="bg-blue-500 hover:bg-blue-600"
        >
          Tạo phiếu thu
        </Button>

        <Button
          variant="contained"
          onClick={() => setRepairModalOpen(true)}
          className="bg-green-500 hover:bg-green-600"
          sx={{ ml: 2 }}
        >
          Xử lý yêu cầu sửa chữa
        </Button>
      </div>
      
      <DailyReportModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      <RepairRequestModal
        open={repairModalOpen}
        onClose={() => setRepairModalOpen(false)}
      />
    </div>
  );
}

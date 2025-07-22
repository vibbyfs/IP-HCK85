import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:5000/api/announcements", {
          headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` },
        });
        setAnnouncements(res.data);
      } catch {
        setAnnouncements([]);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="max-w-lg mx-auto pt-6 px-4">
        <h1 className="font-bold text-xl text-center mb-4">Pengumuman RT</h1>
        {loading ? (
          <div className="text-center text-gray-400">Loading...</div>
        ) : announcements.length === 0 ? (
          <div className="text-center text-gray-400">Belum ada pengumuman.</div>
        ) : (
          <div className="space-y-3">
            {announcements.map((a) => (
              <div key={a.id} className="bg-white p-4 rounded-xl shadow">
                <div className="font-semibold">{a.title}</div>
                <div className="text-sm text-gray-600">{a.content}</div>
                <div className="text-xs text-gray-400 mt-1">{new Date(a.createdAt).toLocaleDateString()}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
}

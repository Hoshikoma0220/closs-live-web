"use client";

import React, { useState } from 'react';
import { FaFacebook, FaGoogle, FaYahoo, FaTwitter, FaApple, FaLine } from 'react-icons/fa';
import Header from '@/components/Header';  // ヘッダーを追加
import Footer from '@/components/Footer';  // フッターを追加

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);  // OTPが送信されたか
  const [otp, setOtp] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOtpSent(true);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />  {/* ヘッダーを追加 */}

      <div className="flex-grow flex justify-center items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"> {/* カラフルな背景 */}
        <div className="bg-white p-8 shadow-lg rounded-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">ログイン</h1>
          
          {/* SNSログインオプション */}
          <div className="space-y-4 mb-6">
            <p className="text-center text-sm text-gray-700">SNSでログイン</p>
            <button className="flex items-center justify-center w-full py-2 bg-black text-white rounded-full hover:opacity-90">
              <FaTwitter className="mr-2" /> X
            </button>
            <button className="flex items-center justify-center w-full py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              <FaFacebook className="mr-2" /> Facebook
            </button>
            <button className="flex items-center justify-center w-full py-2 bg-white border border-gray-300 text-gray-800 rounded-full hover:bg-gray-100">
              <FaGoogle className="mr-2" /> Google
            </button>
            <button className="flex items-center justify-center w-full py-2 bg-white border border-gray-300 text-gray-800 rounded-full hover:bg-gray-100">
              <FaYahoo className="mr-2" /> Yahoo! JAPAN
            </button>
            
            {/* Appleログインボタン */}
            <button className="flex items-center justify-center w-full py-2 bg-black text-white rounded-full hover:bg-gray-800">
              <FaApple className="mr-2" /> Sign in with Apple
            </button>

            {/* LINEログインボタン */}
            <button className="flex items-center justify-center w-full py-2 bg-green-500 text-white rounded-full hover:bg-green-600">
              <FaLine className="mr-2" /> Sign in with LINE
            </button>
          </div>

          <hr className="my-6" />

          {/* メールアドレスでログイン */}
          <form onSubmit={handleEmailSubmit}>
            <div className="mb-4">
              <label className="block text-gray-800">メールアドレス</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-400 rounded"
                style={{ color: '#000' }}  // 入力文字を黒色に設定
                required
              />
            </div>
            {!otpSent && (
              <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded-full w-full hover:bg-orange-600">
                ワンタイムパスワードを発行
              </button>
            )}
          </form>

          {otpSent && (
            <form onSubmit={handleOtpSubmit} className="mt-6">
              <div className="mb-4">
                <label className="block text-gray-800">ワンタイムパスワード</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full p-2 border border-gray-400 rounded"
                  style={{ color: '#000' }}  // OTP入力文字も黒色に設定
                  required
                />
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-full w-full hover:bg-blue-700">
                ログイン
              </button>
            </form>
          )}

          {submitted && <div className="text-green-500 text-center mt-4">ログインに成功しました！</div>}
        </div>
      </div>

      <Footer />  {/* フッターを追加 */}
    </div>
  );
};

export default LoginPage;

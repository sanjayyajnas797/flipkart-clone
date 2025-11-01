const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const connect = async () => {
  try {
    console.log('Connecting to PostgreSQL via Prisma...');
    await prisma.$connect();
    console.log('✅ Connected to PostgreSQL');
  } catch (err) {
    console.error('❌ Prisma connection error:', err.message);
  }
};

module.exports = { prisma, connect };

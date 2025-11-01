const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Save = async (req, res) => {
  try {
    const { A1, A2, A3, A4 } = req.body;

    // ✅ Correct Prisma create syntax
    const data = await prisma.iBPS3_ANALOG.create({
      data: {
        A1,
        A2,
        A3,
        A4,
      },
    });

    res.json({ message: "Data saved successfully", data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error saving data" });
  }
};

module.exports = { Save };

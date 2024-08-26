import CourseNotification from "../../model/NotificationModel/courseNotificationModel.js";

export async function getCourseNotificationsForTrainer(req, res) {
  const { trainerId } = req.params;

  try {
    const notifications = await CourseNotification.find({ recipient: trainerId }).sort({ createdAt: -1 });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
# Copyright (c) 2023, osama and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Property(Document):
	# def validate(self):
	# 	if self.status == "Sale" and self.property_type == "House":
	# 		frappe.throw("You can't choose House and sale status")
	def after_insert(self):
		frappe.msgprint("Intered successfully")
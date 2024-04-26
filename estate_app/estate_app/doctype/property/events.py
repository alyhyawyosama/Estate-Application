
import frappe

def on_update(doc,event):
    frappe.msgprint(f" {doc.name} has been updated by {doc.owner}")

def after_insert(doc,event):
    note = frappe.get_doc({
       'doctype':'Note',
       'title': f"{doc.name} added successfully",
       'public':True,
       'content':doc.description
    })

    note.insert()
    frappe.db.commit()
    frappe.msgprint(f"Note {note.title} has been created")
    
    